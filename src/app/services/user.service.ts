import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersPath = '/users'
  users$ = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {
    this.init();
  }

  public init() {
    this.http.get<User[]>(`${environment.apiBaseUrl}${this.usersPath}`).subscribe((users) => {
      this.users$.next(users);
    });
  }

  public getUsers(): Observable<User[]> {
    return this.users$;
  }

  public getUserbyId(userId: string): Observable<User | undefined> {
    return this.users$.pipe(map(users => users.find(user => `${user.id}` === userId)));
  }
}
