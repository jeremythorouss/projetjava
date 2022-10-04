
//user.service.ts
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Salle} from "../../models/salle.model";

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private url: string;

  constructor(private http: HttpClient) {
    //this.url = environment.url;
    this.url = environment.url;
  }

  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${this.url}/salles/list-salles`);
  }

  addSalle(salle: Salle): Observable<Salle> {
    console.log(salle)
    return this.http.post<any>(`${this.url}/salles/add-salle`, salle);
  }

  deleteSalle(id: bigint | null): Observable<any> {
    return this.http.delete(`${this.url}/salles/${id}`);
  }

}
