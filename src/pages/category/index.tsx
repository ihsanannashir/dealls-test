import { fetchCategories } from "@/services/api";
import { CategoryListResponse } from "@/types/category";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

type CategoryPageProps = {
  categories: CategoryListResponse;
};

const CategoryPage = ({ categories }: CategoryPageProps) => {
  return (
    <>
      <Head>
        <title>Find Category | Dealls – Job Vacancies and Mentoring</title>
        <meta
          name="description"
          content="Discover job opportunities and mentoring for Indonesian talents."
        />
        <meta name="keywords" content={`jobs, mentoring, Indonesia, Dealls`} />
      </Head>

      <h2 className="font-semibold text-xl text-center my-4">
        Cari Kategori yang sesuai denganmu!
      </h2>
      <div className="flex flex-col space-y-4">
        {categories.data.map((category, index) => {
          return (
            <Link key={index} href={`/category/${category.id}`}>
              <div className="p-4 border rounded-md items-center text-center flex justify-center hover:scale-105 duration-150 transition-all font-bold text-white bg-brand">
                {category.name}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = await fetchCategories();

  return { props: { categories } };
};

export default CategoryPage;
