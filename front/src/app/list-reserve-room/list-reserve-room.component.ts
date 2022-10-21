import { Component, OnInit } from '@angular/core';
import {ReserveSalle} from "../../models/reservesalle.model";
import {ReserveSalleService} from "../services/reserve-salle.service"
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-reserve-room',
  templateUrl: './list-reserve-room.component.html',
  styleUrls: ['./list-reserve-room.component.scss']
})
export class ListReserveRoomComponent implements OnInit {

  estCeQuilEstLa= false;
  reservesalles :ReserveSalle[] = [];
  _filterText: string = '';
  filteredReserveSalles?: ReserveSalle[];

  get filterText(){
    return this._filterText;
  }

  set filterText(value:string){
    this._filterText = value;
    this.filteredReserveSalles= this.filterReserveSalleByName(value);
  }

  constructor(private http: HttpClient, private reserveSalleService: ReserveSalleService, private router:Router) {
    this.reservesalles=[];
  }

  ngOnInit() {
    this.reserveSalleService.getReserveSalle().subscribe(reservesalles => {
      console.log(reservesalles);
      this.reservesalles = reservesalles;
      this.filteredReserveSalles = this.reservesalles;
    })
  }

  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }

  addReserveSalle():void {
    this.router.navigateByUrl("reserve-room");
    this.filteredReserveSalles = this.filterReserveSalleByName(this._filterText);
  }

  deleteReserveSalle(id: number | null){
    this.reserveSalleService.deleteReserveSalle(id).subscribe(
      () => this.reservesalles = this.reservesalles.filter(reservesalle => reservesalle.id !== id));
  }
  editReserveSalle(id: number | null){
    this.router.navigateByUrl("edit-reservesalle/"+id)
  }

  filterReserveSalleByName(filterTerm:string){
    if(this.reservesalles.length === 0 || this.filterText === ''){
        return this.reservesalles;
      }else {
        return this.reservesalles.filter((reservesalle)=>
        {
          return reservesalle.namesalle.toLowerCase() === filterTerm.toLowerCase();
        })
      }
  }

}
