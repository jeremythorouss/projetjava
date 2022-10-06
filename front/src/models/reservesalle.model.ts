//salle.model.ts
import {User} from "./user.model";

export class ReserveSalle {
  id: number;
  Date: number;
  Hour: number;
  Names: string;

  constructor(id: number, Date: number, Hour: number, Names: string) {
    this.id = id;
    this.Date = Date;
    this.Hour = Hour;
    this. Names = Names;
  }
}
