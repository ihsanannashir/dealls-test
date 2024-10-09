// Single Article Detail
export interface ArticleDetail {
  id: number;
  slug: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// Response Blueprint
export interface ArticleDetailResponse {
  code: number;
  data: ArticleDetail;
}
