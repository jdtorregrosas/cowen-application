import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  },
  phone: string;
  website: string;
  company: {
    name: string;
  }
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersPath = '/users'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}${this.usersPath}`);
  }
}
