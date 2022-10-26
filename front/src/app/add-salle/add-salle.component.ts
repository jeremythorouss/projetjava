import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
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
  imageOnClick(pictureName : String){

    var amphiPicture = document.getElementById("image1")
    if(amphiPicture != null){
      amphiPicture.style.width = "150px";
      amphiPicture.style.height = "90px";
    }

    var roomPicture = document.getElementById("image2")
    if(roomPicture != null){
      roomPicture.style.width = "150px";
      roomPicture.style.height = "90px";
    }


    console.log(pictureName === "image1.jpg")
    if(pictureName ==="amphi.png" && amphiPicture != null){
      amphiPicture.style.width = "200px";
      amphiPicture.style.height = "110px";
      console.log("amphi")
    }
    else if(pictureName === "image2.jpg" && roomPicture != null){
      roomPicture.style.width = "200px";
      roomPicture.style.height = "110px";
    }


  }


}
