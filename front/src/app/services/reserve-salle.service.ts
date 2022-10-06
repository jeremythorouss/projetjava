import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Salle} from "../../models/salle.model";

@Injectable({
  providedIn: 'root'
})

export class ReserveSalleService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }
  getReserveSalle(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${this.url}/salles/list-salles`);
  }

}
