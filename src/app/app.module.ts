import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./weather/weather.component";
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from "./menu/menu.component";

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'weather',component:WeatherComponent},
  {path:'menu',component:MenuComponent},
];
@NgModule({
  declarations: [
    AppComponent,ClassroomComponent,StudentComponent,
    LoginComponent,RegisterComponent,
    WeatherComponent,MenuComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
