// Response Blueprint
export interface GeneralResponse<T> {
  code: number;
  data: T;
}
