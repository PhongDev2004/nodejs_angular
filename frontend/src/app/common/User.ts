export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface IUser {
  _id?: number;
  username?: string;
  email: string;
  password: string;
  role?: string;
}
