import { fetchArticleDetails, fetchArticles } from "@/services/api";
import { ArticleDetail } from "@/types/article-detail";
import { GetServerSideProps } from "next";
import ArticleParser from "@/components/article-parser";
import Link from "next/link";
import { ArticleData } from "@/types/article";
import Custom404 from "@/pages/404";
import ArticleCard from "@/components/article-card";
import Head from "next/head";

type LokerDetailPageProps = {
  article: ArticleDetail | null;
  moreArticle: ArticleData[];
  error?: string;
};

const LokerDetailPage = ({
  article,
  moreArticle,
  error,
}: LokerDetailPageProps) => {
  if (error) {
    return <Custom404 />;
  }

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{article.title} | Dealls – Job Vacancies and Mentoring</title>
        <meta
          name="description"
          content="Discover job opportunities and mentoring for Indonesian talents."
        />
        <meta
          name="keywords"
          content={`${article.title}, jobs, mentoring, Indonesia, Dealls`}
        />
      </Head>

      <div className="grid grid-rows-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border rounded-lg sm:col-span-2 lg:col-span-3">
          <div className="p-4">
            <h1 className="text-xl sm:text-2xl font-bold">{article.title}</h1>
            {article.categories && (
              <div className="mt-4">
                {article.categories?.map((category) => (
                  <Link
                    href={`/category/${category.id}`}
                    key={category.id}
                    className="text-xs py-2 px-4 border rounded-lg bg-brand/10"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-t bg-gray-50">
            <ArticleParser className="p-4" data={article.content} />
          </div>
        </div>

        <section className="border rounded-lg max-h-min">
          <h2 className="text-lg font-bold p-4 border-b">Loker Serupa</h2>
          <div className="space-y-4 p-4 g-brand/10">
            {moreArticle?.map((job) => {
              return <ArticleCard key={job.id} variant="small" data={job} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { lokerSlug } = context.params as { lokerSlug: string };

  try {
    const resDetail = await fetchArticleDetails(lokerSlug);
    const article = resDetail.data as ArticleDetail;
    let categoryId;

    if (article.categories !== null) {
      categoryId = article.categories[0].id;
    }

    const resMore = await fetchArticles(undefined, categoryId);
    const moreArticle = resMore.data.data as ArticleData[];

    return {
      props: { article, moreArticle },
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        article: null,
        error: true,
      },
    };
  }
};

export default LokerDetailPage;
