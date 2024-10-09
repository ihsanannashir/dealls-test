import { ArticlesResponse } from "@/types/article";
import { ArticleDetailResponse } from "@/types/article-detail";
import axios from "axios";

export const fetchArticles = async (
  search?: string,
  category_id?: number,
  limit = 5,
  page = 1
) => {
  const { data } = await axios.get(`${process.env.API_URL}/articles`, {
    params: { search, category_id, limit, page },
  });
  return data as ArticlesResponse;
};

export const fetchArticleDetails = async (id: string) => {
  const { data } = await axios.get(`${process.env.API_URL}/articles/${id}`);
  return data as ArticleDetailResponse;
};

export const fetchCategories = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/categories`);
  return data as CanvasTextAlign;
};
