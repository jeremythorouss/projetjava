import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'admin',
  templateUrl: './publique.component.html',
  styleUrls: ['./publique.component.scss']
})
export class PubliqueComponent implements OnInit {

  estCeQuilEstLa= false;

  showMe() {
    this.estCeQuilEstLa=!this.estCeQuilEstLa;
  }

  ngOnInit() {
  }


}
