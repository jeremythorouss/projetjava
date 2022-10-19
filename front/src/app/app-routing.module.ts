import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {AdminComponent} from "./admin/admin.component";
import {PubliqueComponent} from "./publique/publique.component";
import {ListSalleComponent} from "./list-salle/list-salle.component";
import {AddSalleComponent} from "./add-salle/add-salle.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {EditSalleComponent} from "./edit-salle/edit-salle.component";
import {ReserveRoomComponent} from "./reserve-room/reserve-room.component";
import {ListReserveRoomComponent} from "./list-reserve-room/list-reserve-room.component";
import {EditReserveRoomComponent} from "./edit-reserve-room/edit-reserve-room.component";

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'publique', component: PubliqueComponent},
  {path:'list-users', component: ListUsersComponent},
  {path:'add-user', component: AddUserComponent},
  {path:'list-salles', component: ListSalleComponent},
  {path:'add-salle', component: AddSalleComponent},
  {path:'reserve-room', component: ReserveRoomComponent},
  {path:'list-reserve-room', component:ListReserveRoomComponent},

  //{path:'edit-user',component: EditUserComponent},
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'edit-salle/:id', component: EditSalleComponent },
  { path: 'edit-reservesalle/:id', component: EditReserveRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
