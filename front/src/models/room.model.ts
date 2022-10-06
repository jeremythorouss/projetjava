//room.model.ts
//import {Bed} from './Bed';
import {User} from '../models/user.model';

export class Room {
  id: number;
  //房间号
  roomNo: number;

  type: string;

  //beds: Bed[];

  users: User[];

  money: number;

  checkInDate: number;

  checkOutDate: number;

  status: number;

  constructor(id: number, roomNo: number, type: string,
              users: User[], money: number, checkInDate: number,
              checkOutDate: number,status: number) {
    this.id = id;
    this.roomNo = roomNo;
    this.type = type;
    this.users = [];
    this.money = money;
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
    this.status = status;

  }
}
