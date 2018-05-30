import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRouting } from './assets/routes/app.routing';

import { FourOFour } from './four.o.four/four.o.four.component';
import { AppComponent } from './app.component';
import { LoggedInComponent } from './logged.in/logged.in.component';
import { RoutingComponent } from './logged.in/routing/routing.component';
import { ItemsComponent } from './logged.in/routing/items/items.component';
import { PurchaseOrdersComponent } from './logged.in/routing/purchase.orders/purchase.orders.component';

@NgModule({
  declarations: [
    FourOFour,
	  AppComponent,
	  LoggedInComponent,
	  RoutingComponent,
	  ItemsComponent,
	  PurchaseOrdersComponent
  ],
  imports: [
    AppRouting,
	  BrowserModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
