import { Component, OnInit } from '@angular/core';
import {Room} from "../../models/room.model";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";
import {User} from "../../models/user.model";
//注解（在ES7中叫做装饰器，用来定义方法和类的信息）
/*定义组件模板有两个方式：
  1. 使用templateUrl引用一个html文件
  2. 使用template + ES6的模版字符串``
  同样2个方法-> 组件样式 styles
  1. 数组：[``]
*/
@Component({
  selector: 'app-reserve-room', //当前组件的引用地址
  templateUrl: './reserve-room.component.html',//当前组件的模板
  styleUrls: ['./reserve-room.component.scss'] //组件的样式文件
})
export class ReserveRoomComponent implements OnInit {
  //组件名称
  estCeQuilEstLa= false;
  room: Room = {
    id: 1,
    roomNo: 100,
    type: 'Double',
    users: [],
    money: 80,
    checkInDate: 6/15/22,
    checkOutDate: 6/25/22,
    status:0
  };


  constructor() {

  }

  ngOnInit(): void {

  }


  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }

  deleteUser(id: bigint | null){

  }

}
