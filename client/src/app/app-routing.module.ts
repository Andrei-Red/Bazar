import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncememtComponent } from './main-page/announcememt/announcememt.component';
import {NotFoundComponent} from "./error-pages/not-found/not-found.component";
import {LoginComponent} from "./login-page/login/login.component";

const routes: Routes = [
  {path: '', component: AnnouncememtComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
