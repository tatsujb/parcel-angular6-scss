import { RouterModule } from '@angular/router';
import { ItemsComponent } from '../../logged.in/routing/items/items.component';
import { PurchaseOrdersComponent } from '../../logged.in/routing/purchase.orders/purchase.orders.component';
import { FourOFour } from '../../four.o.four/four.o.four.component';

const routes = [
  { path: '', redirectTo: 'purchaseorders', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent, data: { state: '1'} },
  { path: 'purchaseorders', component: PurchaseOrdersComponent, data: { state: '2'} },
  { path: '**', component: FourOFour }
];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});
