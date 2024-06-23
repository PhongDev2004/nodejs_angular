import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse, IProduct } from '../common/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  listChange = new BehaviorSubject<any>(null);
  API_URl = 'http://localhost:8000/api/products';
  action = {
    event: '',
    id: '',
  };

  constructor(private http: HttpClient) {}

  handleGetProducts(): Observable<ApiResponse<IProduct[]>> {
    return this.http.get<ApiResponse<IProduct[]>>(`${this.API_URl}`);
  }

  handleGetProduct(id: string): Observable<ApiResponse<IProduct>> {
    return this.http.get<ApiResponse<IProduct>>(`${this.API_URl}/${id}`);
  }

  handleCreateProduct(product: IProduct): Observable<any> {
    return this.http.post(`${this.API_URl}`, product);
  }

  handleEditProduct(id: string, product: IProduct): Observable<any> {
    return this.http.put(`${this.API_URl}/update/${id}`, product);
  }

  handleDeleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.API_URl}/delete/${id}`);
  }

  toggleEditProduct(data: any, event: string) {
    this.action.event = event;
    this.action.id = data._id;
  }
}
