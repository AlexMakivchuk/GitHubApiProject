import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PaginationComponent} from "./components/pagination/pagination.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";

const routes: Routes = [
  {path: '', redirectTo: 'pagination', pathMatch: 'full'},
  {path: 'pagination', component: PaginationComponent},
  {path: 'User-Info', component: UserInfoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
