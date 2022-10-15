//salle.model.ts
import {User} from "./user.model";

export class ReserveSalle {
  id: bigint | null;
  startdate: Date;
  endate: Date;
  name: string;

  constructor(id: bigint | null, startdate: Date, endate: Date, name: string) {
    this.id = id;
    this.startdate = startdate;
    this.endate = endate;
    this.name = name;
  }

}
