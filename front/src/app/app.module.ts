import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from "./admin/admin.component";
import { PubliqueComponent } from "./publique/publique.component";
import { ListSalleComponent } from "./list-salle/list-salle.component";
import { AddSalleComponent } from "./add-salle/add-salle.component";
import { AddReservesalleComponent } from './add-reservesalle/add-reservesalle.component';
import { EditUserComponent } from "./edit-user/edit-user.component";
import { EditSalleComponent } from "./edit-salle/edit-salle.component";
import { ListReservesalleComponent } from './list-reservesalle/list-reservesalle.component';
import { EditReservesalleComponent } from "./edit-reservesalle/edit-reservesalle.component";
import { FilterPipe } from './filter.pipe';
import { IgxTimePickerModule, IgxInputGroupModule, IgxIconModule } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUsersComponent,
    AdminComponent,
    PubliqueComponent,
    ListSalleComponent,
    AddSalleComponent,
    AddReservesalleComponent,
    ListSalleComponent,
    ListSalleComponent,
    EditUserComponent,
    EditSalleComponent,
    ListReservesalleComponent,
    EditReservesalleComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IgxTimePickerModule,
    IgxInputGroupModule,
    IgxIconModule
  ],
  providers: [],
  bootstrap: [AppComponent], //整个模块的根组件
  entryComponents: [],
  schemas: []
})
export class AppModule {
}
