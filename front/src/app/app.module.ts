import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminComponent} from "./admin/admin.component";
import {PubliqueComponent} from "./publique/publique.component";
import {ListSalleComponent} from "./list-salle/list-salle.component";
import {AddSalleComponent} from "./add-salle/add-salle.component";
import { ReserveRoomComponent } from './reserve-room/reserve-room.component';
import { MessagesComponent } from './messages/messages.component';
import { ListReserveRoomComponent } from './list-reserve-room/list-reserve-room.component';

import {EditUserComponent} from "./edit-user/edit-user.component";
import {EditSalleComponent} from "./edit-salle/edit-salle.component";
import { ListReserveRoomComponent } from './list-reserve-room/list-reserve-room.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUsersComponent,
    AdminComponent,
    PubliqueComponent,
    ListSalleComponent,
    AddSalleComponent,
    ReserveRoomComponent,
    ListSalleComponent,
    MessagesComponent,
<<<<<<< Updated upstream
    ListSalleComponent,
    EditUserComponent,
    EditSalleComponent,
    ListReserveRoomComponent
=======
    ListReserveRoomComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
