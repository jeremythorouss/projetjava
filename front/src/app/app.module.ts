import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {FormsModule} from "@angular/forms";
import {AdminComponent} from "./admin/admin.component";
import {PubliqueComponent} from "./publique/publique.component";
import { ListDateComponent } from './list-date/list-date.component';
import { ReserveRoomComponent } from './reserve-room/reserve-room.component';

@NgModule({
  declarations: [ //声明本模块中拥有的视图类: 组件、指令和管道
    AppComponent,
    AddUserComponent,
    ListUsersComponent,
    AdminComponent,
    PubliqueComponent,
    ListDateComponent,
    ReserveRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //整个模块的根组件
})
export class AppModule { }
