//salle.model.ts
import {User} from "./user.model";

export class ReserveSalle {
  id: number | null;
  startdate: Date;
  endate: Date;
  name: string;

  constructor(id: number | null, startdate: Date, endate: Date, name: string) {
    this.id = id;
    this.startdate = startdate;
    this.endate = endate;
    this.name = name;
  }

}
