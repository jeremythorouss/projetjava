import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable, of } from 'rxjs';
import {ReserveSalle} from "../../models/reservesalle.model";
import { RESERVESALLES } from '../mock-reserveSalle';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ReserveSalleService {
  //private url: string;

  constructor(private messageService: MessageService) {
    //this.url = environment.url;
  }


  getReserveSalle():  Observable<ReserveSalle[]> {
    const reservesalles = of(RESERVESALLES);
    this.messageService.add('ReserveSalleService: fetched reservesalle');
    return reservesalles;
  }

}
