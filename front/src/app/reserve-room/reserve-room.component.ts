import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";
import {ReserveSalle} from "../../models/reservesalle.model";
import {RESERVESALLES} from '../mock-reserveSalle';

@Component({
  selector: 'app-reserve-room',
  templateUrl: './reserve-room.component.html',
  styleUrls: ['./reserve-room.component.scss']
})

export class ReserveRoomComponent implements OnInit {
  estCeQuilEstLa= false;
  reservesalles = RESERVESALLES;
  selectedSalle?: ReserveSalle;


  constructor(private http: HttpClient, private userService: UserService) {
    //this.reservesalles=[];
  }

  ngOnInit(): void {

  }
  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }
  onSelect(reservesalle: ReserveSalle): void {
    this.selectedSalle = reservesalle;
  }
  /*deleteSalle(id: bigint | null){
    this.salleService.deleteSalle(id).subscribe(() => this.salles = this.salles.filter(salle => salle.id !== id));
  }*/

}
