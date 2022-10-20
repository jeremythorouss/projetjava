import { Pipe, PipeTransform } from '@angular/core';
import {ReserveSalle} from "../models/reservesalle.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(reservesalles: ReserveSalle[],filterText:string) {
    if(reservesalles.length === 0 || filterText === ''){
      return reservesalles;
    }else {
      return reservesalles.filter((reservesalle)=>
      {
        return reservesalle.namesalle.toLowerCase() === filterText.toLowerCase();
      })
    }

  }

}
