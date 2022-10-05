/*
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    const user = new User(
      null,
      ngForm.form.value.name,
      ngForm.form.value.email,
      ngForm.form.value.birthdate,
    )
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const user = new User(
      null,
      ngForm.form.value.name,
      ngForm.form.value.email,
      ngForm.form.value.birthdate,
    )

    this.userService.addUser(user).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-users'), 1000)
  }


}
*/
