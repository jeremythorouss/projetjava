import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReserveSalle} from "../../models/reservesalle.model";
import {ReserveSalleService} from "../services/reserve-salle.service"
import { MessageService } from '../services/message.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reserve-room',
  templateUrl: './reserve-room.component.html',
  styleUrls: ['./reserve-room.component.scss']
})

export class ReserveRoomComponent implements OnInit {
  estCeQuilEstLa= false;

  reservesalles :ReserveSalle[] = [];

  selectedSalle?: ReserveSalle;


  constructor(private httpClient: HttpClient,private router: Router, private reserveSalleService: ReserveSalleService) {
    //this.reservesalles=[];
  }

  ngOnInit(): void {
    this.getReserveSalle();
    this.addReserveSalle();
  }

  // onSelect(reservesalle: ReserveSalle): void {
  //   this.selectedSalle = reservesalle;
  //   this.messageService
  //     .add(`ReserveRoomComponent: Selected reservesalle id=${reservesalle.id}`);
  // }
  //retrieve the reservesalles from the service.
  //subscribe() passes the emitted array to the callback,
  // which sets the component's heroes property.
  getReserveSalle(): void {
    this.reserveSalleService.getReserveSalle()
        .subscribe((reservesalles )=> this.reservesalles = reservesalles);
  }


  addReserveSalle():void {

    this.reserveSalleService.addReserveSalle()
      .subscribe( reservesalle => this.reservesalles.push(reservesalle));
  }


  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }

  /*deleteSalle(id: bigint | null){
    this.salleService.deleteSalle(id).subscribe(() => this.salles = this.salles.filter(salle => salle.id !== id));
  }*/

}
