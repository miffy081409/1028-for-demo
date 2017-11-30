import { NgModule } from '@angular/core';

import { StocksComponent } from './stocks.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  imports: [ InventoryRoutingModule ],
  declarations: [ StocksComponent ]
})
export class InventoryModule { }
