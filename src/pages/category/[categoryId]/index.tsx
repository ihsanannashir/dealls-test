import ArticleCard from "@/components/article-card";
import { fetchArticles, fetchCategories } from "@/services/api";
import { ArticleData } from "@/types/article";
import { CategoryData, CategoryListResponse } from "@/types/category";
import { GetServerSideProps } from "next";
import { useState } from "react";

interface CategoryDetailPageProps {
  initialArticles: ArticleData[];
  totalPages: number;
  categoryId: string;
  catName: CategoryData[];
}

const CategoryDetailPage = ({
  initialArticles,
  totalPages,
  categoryId,
  catName,
}: CategoryDetailPageProps) => {
  const [articles, setArticles] = useState<ArticleData[]>(initialArticles);
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(page <= totalPages);

  let title;

  catName.map((cat) => {
    if (cat.id.toString() === categoryId) {
      title = cat.name;
    }
  });

  const loadMoreArticles = async () => {
    setLoading(true);
    try {
      const res = await fetchArticles(undefined, categoryId, 10, 1);
      const newArticles = res.data.data;

      setArticles((prev) => [...prev, ...newArticles]);
      setPage(page + 1);
      setHasMore(page < totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard variant="small" key={article.id} data={article} />
        ))}
      </div>
      {hasMore && (
        <button
          className="mt-8 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={loadMoreArticles}
          disabled={loading}
        >
          {loading ? "Loading..." : "View More"}
        </button>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categoryId } = context.params as { categoryId: string };

  try {
    const cat: CategoryListResponse = await fetchCategories();
    const catName = cat.data;

    const res = await fetchArticles(undefined, categoryId, 10, 1);
    const articles = res.data.data;
    const totalPages = res.data.metadata;

    return {
      props: {
        initialArticles: articles,
        totalPages,
        categoryId,
        catName,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        initialArticles: [],
        totalPages: 0,
        categoryId,
      },
    };
  }
};

export default CategoryDetailPage;
