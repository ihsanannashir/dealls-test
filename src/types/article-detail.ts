import { CategoryData } from "./category";
import { GeneralResponse } from "./global";

// Single Article Detail
export interface ArticleDetail {
  id: number;
  slug: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  categories: CategoryData[] | null;
}

// Response Blueprint
export type ArticleDetailResponse = GeneralResponse<ArticleDetail>;
