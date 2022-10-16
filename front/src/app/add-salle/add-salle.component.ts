import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SalleService} from "../services/salle.service";
import {Salle} from "../../models/salle.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.scss']
})
export class AddSalleComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private salleService: SalleService) {
  }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const salle = new Salle(
      null,
      ngForm.form.value.name,
      ngForm.form.value.photo,
      ngForm.form.value.capacite,
      ngForm.form.value.equipement

    )
    console.log('Salle :', Salle)

    this.salleService.addSalle(salle).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-salles'), 1000)
  }


}
