import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {first} from "rxjs";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  form: FormGroup ;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;



    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      birthdate: ['']
    });


    if (this.isAddMode=!this.isAddMode) {
      this.userService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    };
  }

    get f() { return this.form.controls; }

    onSubmit() {
      this.submitted = true;



      // stop here if form is invalid
      if (this.form.invalid) {
        return;
      }

      this.loading = true;
      if (this.isAddMode) {
        this.createUser();
      } else {
        this.updateUser();
      }
    }

  private createUser() {
      this.userService.create(this.form.value)
        .pipe(first())
        .subscribe({
          next: () => {
            //this.alertService.success('User added', { keepAfterRouteChange: true });
            this.router.navigate(['../'], { relativeTo: this.route });
          },
          error: error => {
            //this.alertService.error(error);
            this.loading = false;
          }
        });
    }

  private updateUser() {
      this.userService.update(this.id, this.form.value)
        .pipe(first())
        .subscribe({
          next: () => {
            this.router.navigateByUrl("list-users");
          },
          error: error => {
            //this.alertService.error(error);
            this.loading = false;
          }
        });
    }


}



