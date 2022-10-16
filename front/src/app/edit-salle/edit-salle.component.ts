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
import {SalleService} from "../services/salle.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Salle} from "../../models/salle.model";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.scss']
})
export class EditSalleComponent implements OnInit {
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
  salle:Salle|undefined
  salles: Salle[]


  constructor(private httpClient: HttpClient, private activatedrouter: ActivatedRoute, private salleService: SalleService, private router: Router) {
    this.id = 0
    this.salles=[]
  }



  ngOnInit() {
    this.sub = this.activatedrouter.params.subscribe(params => {

      this.id = +params['id'];

      console.log( this.id)
      console.log( +params['id'])


      this.salleService.getSalleById(this.id).subscribe(salleResponse => {
        this.salle = salleResponse;
        console.log("salle")
        console.log(this.salle)
        //this.user.birthdate=this.user.birthdate.getDate()

        // ngForm.form.value.name = this.user.name;
        // ngForm.form.value.email = this.user.email;
        // ngForm.form.value.birthdate = this.user.birthdate;
      });

    })

  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const salle = new Salle(
      this.id,
      ngForm.form.value.name,
      ngForm.form.value.photo,
      ngForm.form.value.capacite,
      ngForm.form.value.equipement
  )

    this.salleService.addSalle(salle).subscribe();
    setTimeout(() => this.router.navigateByUrl('/list-salles'), 1000)

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






