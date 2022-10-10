
//user.service.ts
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) {
    //this.url = environment.url;
    this.url = environment.url;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users/list-users`);
  }

  addUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<any>(`${this.url}/users/add-user`, user);
  }

  deleteUser(id: bigint | null): Observable<any> {
    return this.http.delete(`${this.url}/users/${id}`);
  }
  editUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<any>(`${this.url}/users/edit-user`, user);
  }
  getAll() {
    return this.http.get<User[]>(this.url);
  }

  getById(id: string) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  create(params: any) {
    return this.http.post(this.url, params);
  }

  update(id: string, params: any) {
    return this.http.put(`${this.url}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
