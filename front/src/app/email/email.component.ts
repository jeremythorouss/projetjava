import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  title = 'EmailTemplate';
  dataset: Details = {
    email:''
  };
  constructor(private https: HttpClient){ }
  onSubmit(){
    this.https.post<Details>('http://localhost:8080/email', this.dataset).subscribe(
      res => {
        this.dataset = res;
        console.log(this.dataset);
        alert('Email Sent successfully');
        this.dataset.email = '';
      });
  }
}
interface Details{
  email:string;
}
