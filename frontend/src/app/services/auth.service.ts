import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IUser } from '../common/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) {}

  register(data: IUser): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, data);
  }

  login(data: IUser): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, data);
  }

  checkUserValid() {}
}
