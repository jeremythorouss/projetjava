import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {AdminComponent} from "./admin/admin.component";
import {PubliqueComponent} from "./publique/publique.component";

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'publique', component: PubliqueComponent},
  {path:'', component: ListUsersComponent},
  {path:'add-user', component: AddUserComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
