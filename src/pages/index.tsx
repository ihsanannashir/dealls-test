import { fetchArticles, fetchCategories } from "@/services/api";
import { ArticlesResponse } from "@/types/article";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleCard from "@/components/article-card";
import { Autoplay, Pagination } from "swiper/modules";

type HomeProps = {
  articles: ArticlesResponse;
};

const Home = ({ articles }: HomeProps) => {
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

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination
            autoplay
            className="h-60"
          >
            {articles.data.data.map((article) => (
              <SwiperSlide key={article.id}>
                <ArticleCard data={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="space-y-4 border">Dummy</div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchArticles();
  const categories = await fetchCategories();
  return { props: { articles, categories } };
};

export default Home;
