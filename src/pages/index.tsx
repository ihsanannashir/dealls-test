import { fetchArticles, fetchCategories } from "@/services/api";
import { ArticlesResponse } from "@/types/article";
import { GetStaticProps } from "next";
import Head from "next/head";
import HeroSection from "@/components/hero-section";
import Link from "next/link";

type HomeProps = {
  articles: ArticlesResponse;
  fullTimeArticles: ArticlesResponse;
};

const Home = ({ articles, fullTimeArticles }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Dealls – Job Vacancies and Mentoring</title>
        <meta
          name="description"
          content="Discover job opportunities and mentoring for Indonesian talents."
        />
        <meta name="keywords" content="jobs, mentoring, Indonesia, Dealls" />
      </Head>

      <h1 className="font-semibold text-xl text-center mb-10">
        Discover job <span className="text-yellow-500">opportunities</span> and{" "}
        <span className="text-yellow-500">mentoring</span> for Indonesian
        talents!
      </h1>

      {/* Main Section */}
      <HeroSection data={articles} />

      {/* Fulltime Job */}
      <h2 className="font-semibold text-xl text-center mt-14 mb-10">
        Full-time Job is waiting!
      </h2>
      <HeroSection data={fullTimeArticles} />

      <Link href={"/loker"}>
        <div className="text-center font-semibold border hover:border-brand max-w-sm p-2 mt-10 mx-auto rounded-lg bg-gray-50 text-brand">
          Explore More
        </div>
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchArticles(undefined, undefined, 8);
  const fullTimeArticles = await fetchArticles(undefined, 6, 8);
  const categories = await fetchCategories();

  return { props: { articles, categories, fullTimeArticles } };
};

export default Home;
