import { GeneralResponse } from "./global";

// Category Data
export interface CategoryData {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

// Category Response
export type CategoryListResponse = GeneralResponse<CategoryData[]>;
