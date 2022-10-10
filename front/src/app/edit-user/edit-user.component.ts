import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";


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
  private sub: any;
  user:User|undefined
  users: User[]


  constructor(private httpClient: HttpClient, private activatedrouter: ActivatedRoute, private userService: UserService, private router: Router) {
    this.id = 0
    this.users=[]
  }



  ngOnInit() {
    this.sub = this.activatedrouter.params.subscribe(params => {

      this.id = +params['id'];

      console.log( this.id)
      console.log( +params['id'])


      this.userService.getUserById(this.id).subscribe(userResponse => {
        this.user = userResponse;
        console.log("user")
        console.log(this.user)
        // ngForm.form.value.name = this.user.name;
        // ngForm.form.value.email = this.user.email;
        // ngForm.form.value.birthdate = this.user.birthdate;
      });

    })

  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const user = new User(
      this.id,
    ngForm.form.value.name,
    ngForm.form.value.email,
    ngForm.form.value.birthdate
  )

    this.userService.addUser(user).subscribe();
    setTimeout(() => this.router.navigateByUrl('/list-users'), 1000)

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






