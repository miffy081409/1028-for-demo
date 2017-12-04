import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { StocksComponent } from './stocks.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  imports: [ InventoryRoutingModule, CommonModule ],
  declarations: [ StocksComponent ]
})
export class InventoryModule { }
