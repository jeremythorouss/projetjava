import {  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder,FormGroup, NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  /*constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {
}

ngOnInit() {
}

onSubmit(ngForm: NgForm) {
  console.log(ngForm);
  const user = new User(
    null,
    ngForm.form.value.name,
    ngForm.form.value.email,
    ngForm.form.value.birthdate,
  )

  this.userService.editUser(user).subscribe();
  setTimeout(()=>this.router.navigateByUrl('/list-users'), 1000)

}*/

  id: number;
  sub: any;
  user: User;
  users:User[];


  constructor(private httpClient: HttpClient, private activatedrouter: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(ngForm: NgForm) {
      this.user = this.activatedrouter.params.subscribe(params => {
      this.id = +params['id'];
      this.user.getUserById('id');
      ngForm.form.value.name=this.name;
      ngForm.form.value.email=this.email;
      ngForm.form.value.birthdate=this.birthdate;

  };

    onUpdate(f: NgForm) {
      ngForm.form.value.name
      ngForm.form.value.email
      ngForm.form.value.birthdate
    }







  /*constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      birthdate: ['']
    });
    this.userService.getById(this.id)
      .pipe(first())
      .subscribe(x => this.form.patchValue(x));
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const user = new User(
      null,
      ngForm.form.value.name,
      ngForm.form.value.email,
      ngForm.form.value.birthdate,
    )
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
    this.userService.editUser(User).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-users'), 1000)

  }*/

}
}






