import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";

@Component({
  selector: 'admin',
  templateUrl: './publique.component.html',
  styleUrls: ['./publique.component.scss']
})
export class PubliqueComponent implements OnInit {

  estCeQuilEstLa= false;

  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }

  ngOnInit() {
  }


}
