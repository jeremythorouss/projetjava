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
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

import {ReserveSalle} from "../../models/reservesalle.model";
import {ReservesalleService} from "../services/reservesalle.service";


@Component({
  selector: 'app-edit-reservesalle',
  templateUrl: './edit-reservesalle.component.html',
  styleUrls: ['./edit-reservesalle.component.scss']
})
export class EditReservesalleComponent implements OnInit {
  /*constructor(private httpClient: HttpClient, private router: Router, private userService: SalleService) {
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
  reservesalle:ReserveSalle|undefined
  reservesalles: ReserveSalle[]


  constructor(private httpClient: HttpClient, private activatedrouter: ActivatedRoute, private reservesalleService: ReservesalleService, private router: Router) {
    this.id = 0
    this.reservesalles=[]
  }



  ngOnInit() {
    this.sub = this.activatedrouter.params.subscribe(params => {

      this.id = +params['id'];

      console.log( this.id)
      console.log( +params['id'])


      this.reservesalleService.getReserveSalleById(this.id).subscribe(reservesalleResponse => {
        this.reservesalle = reservesalleResponse;
        console.log("reservesalle")
        console.log(this.reservesalle)
        //this.user.birthdate=this.user.birthdate.getDate()

        // ngForm.form.value.name = this.user.name;
        // ngForm.form.value.email = this.user.email;
        // ngForm.form.value.birthdate = this.user.birthdate;
      });

    })

  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const reservesalle = new ReserveSalle(
      this.id,
      ngForm.form.value.name,
      ngForm.form.value.namesalle,
      ngForm.form.value.startdate,
      ngForm.form.value.endate,
  )

    this.reservesalleService.addReserveSalle(reservesalle).subscribe();
    setTimeout(() => this.router.navigateByUrl('/list-reservesalle'), 1000)

  }


  /*constructor(private httpClient: HttpClient, private router: Router, private salleService: SalleService) {
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






