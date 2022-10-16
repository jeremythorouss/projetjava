import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  estCeQuilEstLa= false;
  users: User[];
  constructor(private http: HttpClient, private userService: UserService, private router:Router) {
    this.users=[];
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      console.log(users)
      this.users = users
    })
  }

  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }

  deleteUser(id: number | null){
    this.userService.deleteUser(id).subscribe(() => this.users = this.users.filter(user => user.id !== id));
  }

  addUser() {
    this.router.navigateByUrl("add-user")
  }
  editUser(id: number | null){
    this.router.navigateByUrl("edit-user/"+id)
  }
}
