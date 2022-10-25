//salle.model.ts
import {User} from "./user.model";

export class ReserveSalle {
  id: number | null;
  name: string;
  namesalle:string;
  startdate: Date;
  endate: Date;

  constructor(id: number | null, name: string, namesalle:string, startdate: Date, endate: Date) {
    this.id = id;
    this.name = name;
    this.namesalle=namesalle;
    this.startdate = startdate;
    this.endate = endate;

  }


}
