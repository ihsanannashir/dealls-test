// Article
export interface Article {
  id: number;
  slug: string;
  title: string;
}

// Metadata type for pagination
export interface Metadata {
  page: number;
  limit: number;
  total_docs: number;
  total_pages: number;
  has_next_page: boolean;
}

// Article List
export interface ArticlesResponse {
  code: number;
  data: {
    data: Article[];
    metadata: Metadata;
  };
}
