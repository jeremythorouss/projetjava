
//user.service.ts
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users/list-users`);
  }

  addUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<any>(`${this.url}/users/add-user`, user);
  }

  deleteUser(id: number | null): Observable<any> {
    return this.http.delete(`${this.url}/users/${id}`);
  }
  /*editUser(id: bigint | null, user:User: Observable<any> {
    return this.http.put<any>(`${this.url}/users/edit-user/${id}`,this.addUser(User));
  }*/

  getUserById( id: number | null): Observable<User> {
    console.log('id : ' , id)
    return this.http.get<User>(`${this.url}/users/user/${id}`);
    }

}


