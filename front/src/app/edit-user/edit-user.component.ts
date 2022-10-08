import {  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input() user: User ;
  @Output() submitted = new EventEmitter<User>();
  form: FormGroup ;



  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      birthdate: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']?.currentValue) {
      this.form?.patchValue(this.user);
    }
  }

  submit() {
    this.submitted.emit(this.form.getRawValue());
    this.form.reset();
  }


}

