import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './assets/routes/app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRouting
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ]
})

export class AppModule { }
