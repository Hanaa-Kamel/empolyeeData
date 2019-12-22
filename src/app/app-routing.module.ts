import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { UsersDetailsComponent } from './component/users-details/users-details.component';


const routes: Routes = [
  {path: 'login' , component: LoginComponent}
  , {path: 'empolyee', component: UsersDetailsComponent}
  , {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
