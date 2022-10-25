import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable} from 'rxjs';
import {ReserveSalle} from "../../models/reservesalle.model";


@Injectable({
  providedIn: 'root'
})

export class ReservesalleService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getReserveSalle(): Observable<ReserveSalle[]> {
    return this.http.get<ReserveSalle[]>(`${this.url}/reservesalles/list-reservesalle`);
  }

  addReserveSalle(reservesalle: ReserveSalle): Observable<ReserveSalle> {
    console.log(reservesalle);
    return this.http.post<any>(`${this.url}/reservesalles/add-reservesalle`, reservesalle)

  }

  deleteReserveSalle(id: number | null): Observable<any> {
    return this.http.delete(`${this.url}/reservesalles/${id}`);
  }
  getReserveSalleById( id: number | null): Observable<ReserveSalle> {
    console.log('id : ' , id)
    return this.http.get<ReserveSalle>(`${this.url}/reservesalles/reservesalle/${id}`);
  }

}
