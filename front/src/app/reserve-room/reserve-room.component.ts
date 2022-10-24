import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReserveSalle} from "../../models/reservesalle.model";
import {ReserveSalleService} from "../services/reserve-salle.service"
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reserve-room', //当前组件的引用地址
  templateUrl: './reserve-room.component.html',//当前组件的模板
  styleUrls: ['./reserve-room.component.scss'] //组件的样式文件
})

export class ReserveRoomComponent implements OnInit {
  //组件名称
  estCeQuilEstLa= false;

  // reservesalles :ReserveSalle[] = [];
  //
  // selectedSalle?: ReserveSalle;

  @ViewChild('f') signupForm?: NgForm;

  constructor(private httpClient: HttpClient,private router: Router, private reserveSalleService: ReserveSalleService) {
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
    setTimeout(()=>this.router.navigateByUrl('/list-reserve-room'), 1000)

    }



  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }


}
