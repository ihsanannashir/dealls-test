import { GeneralResponse } from "./global";

// Article
export interface ArticleData {
  id: number;
  slug: string;
  title: string;
}

// Metadata type for pagination
export interface MetadataResponse {
  page: number;
  limit: number;
  total_docs: number;
  total_pages: number;
  has_next_page: boolean;
}

// Article List
export type ArticlesResponse = GeneralResponse<{
  data: ArticleData[];
  metadata: MetadataResponse;
}>;
