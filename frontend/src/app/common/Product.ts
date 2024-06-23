export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface IProduct {
  _id?: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  thumbnail: string;
  description: string;
  category?: string;
  rating?: number;
  discountPercentage?: number;
  images?: string[];
}
