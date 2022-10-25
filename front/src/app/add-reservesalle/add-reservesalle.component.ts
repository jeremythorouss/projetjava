import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReserveSalle} from "../../models/reservesalle.model";
import {ReservesalleService} from "../services/reservesalle.service"
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-reservesalle', //当前组件的引用地址
  templateUrl: './add-reservesalle.component.html',//当前组件的模板
  styleUrls: ['./add-reservesalle.component.scss'] //组件的样式文件
})

export class AddReservesalleComponent implements OnInit {
  //组件名称
  estCeQuilEstLa= false;

  // selectedSalle?: ReserveSalle;

  //@ViewChild('f') signupForm?: NgForm;

  constructor(private httpClient: HttpClient,private router: Router, private reserveSalleService: ReservesalleService) {
    //this.reservesalles=[];
  }

  ngOnInit() {
    // this.name = userid.map((userid[]) => {
    //   return {
    //     label: `${userid.Name} `,
    //     value: `${userid.Name} `,
    //   };
    // });
  }

  onSubmit(ngForm: NgForm){
    console.log(ngForm);
    const reservesalle = new ReserveSalle(
      null,
      ngForm.form.value.startdate,
      ngForm.form.value.endate,
      ngForm.form.value.name,
      ngForm.form.value.namesalle,)
    this.reserveSalleService.addReserveSalle(reservesalle).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-reservesalle'), 1000)

    }

  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }


}
