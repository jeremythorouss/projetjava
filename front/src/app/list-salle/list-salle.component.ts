import { Component, OnInit } from '@angular/core';
import {Salle} from "../../models/salle.model";
import {HttpClient} from "@angular/common/http";
import {SalleService} from "../services/salle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-salles',
  templateUrl: './list-salle.component.html',
  styleUrls: ['./list-salle.component.scss']
})
export class ListSalleComponent implements OnInit {

  estCeQuilEstLa= false;
  salles: Salle[];
  constructor(private http: HttpClient, private salleService: SalleService, private router:Router) {
    this.salles=[];
  }

  ngOnInit() {
    this.salleService.getSalles().subscribe(salles => {
      console.log(salles)
      this.salles = salles
    })
  }

  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }

  deleteSalle(id: number | null){
    this.salleService.deleteSalle(id).subscribe(() => this.salles = this.salles.filter(salle => salle.id !== id));
  }

  addSalle() {
    this.router.navigateByUrl("add-salle")
  }
  editSalle(id: number | null){
    this.router.navigateByUrl("edit-salle/"+id)
  }
}
