import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable} from 'rxjs';
import {ReserveSalle} from "../../models/reservesalle.model";

@Injectable({
  providedIn: 'root'
})

export class ReserveSalleService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getReserveSalle(): Observable<ReserveSalle[]> {
    return this.http.get<ReserveSalle[]>(`${this.url}/reservesalles/list-reserve-room`);
  }

  addReserveSalle(reservesalle: ReserveSalle): Observable<ReserveSalle> {
    console.log(reservesalle);
    return this.http.post<any>(`${this.url}/reservesalles/reserve-room`, reservesalle)

  }

  // getReserveSalle():  Observable<ReserveSalle[]> {
  //   const reservesalles = of(RESERVESALLES);
  //   this.messageService.add('ReserveSalleService: fetched reservesalle');
  //   return reservesalles;
  // }
  deleteReserveSalle(id: bigint | null): Observable<any> {
    return this.http.delete(`${this.url}/reservesalles/${id}`);
  }

}
