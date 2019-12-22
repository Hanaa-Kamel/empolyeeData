import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersDetailsComponent } from './component/users-details/users-details.component';
import { LoginComponent } from './Login/login/login.component';
import { ContantComponent } from './content/contant/contant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsersDetailsComponent,
    LoginComponent,
    ContantComponent,

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
