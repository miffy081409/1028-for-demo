import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { InquiryComponent } from './inquiry.component';
import { OrderComponent } from './order.component';
import { NewOrderComponent } from './neworder.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  declarations: [ InquiryComponent, OrderComponent, NewOrderComponent ],
  imports: [FormsModule, CommonModule, SalesRoutingModule ]
})
export class SalesModule { }
