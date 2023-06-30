import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getUser(id: number) {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  getUsers() {
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  editUser(user: User) {
    return this.http.put<User>("http://localhost:3000/users", user);
  }

  postUser(user: User) {
    return this.http.post("http://localhost:3000/users", user);
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

}
