import { fetchArticles } from "@/services/api";
import { ArticleData } from "@/types/article";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const LokerPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);

      const result = await fetchArticles(searchTerm, undefined, 10);
      setArticles(result.data.data);

      setLoading(false);
    };

    getArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await fetchArticles(searchTerm, undefined, 10);

    setArticles(result.data.data);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Loker | Dealls – Job Vacancies and Mentoring</title>
        <meta
          name="description"
          content="Search for job vacancies on Dealls."
        />
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Loker</h1>
        <form onSubmit={handleSearch} className="mb-4 flex">
          <input
            type="text"
            placeholder="cari loker..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2 w-full"
          />
          <button
            type="submit"
            className="bg-brand text-white rounded px-4 py-2 ml-2"
          >
            Search
          </button>
        </form>

        {loading && <p>Loading articles...</p>}
        {articles.length > 0 ? (
          <div>
            {articles.map((article) => (
              <div key={article.id} className="border p-4 mb-2 rounded">
                <h2 className="text-xl font-bold">{article.title}</h2>
                <Link
                  className="text-sm text-brand font-semibold underline"
                  href={`/loker/${article.slug}`}
                >
                  Selengkapnya
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </>
  );
};

export default LokerPage;
