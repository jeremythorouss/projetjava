//salle.model.ts
import {User} from "./user.model";

export class ReserveSalle {
  id: number | null;
  startdate: Date;
  endate: Date;
  name: string;
  namesalle:string;

  constructor(id: number | null, startdate: Date, endate: Date, name: string, namesalle:string) {
    this.id = id;
    this.startdate = startdate;
    this.endate = endate;
    this.name = name;
    this.namesalle=namesalle;

  }


}
