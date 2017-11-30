import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { CustomerComponent } from './customer.component';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [ CustomerComponent, ItemComponent ],
  imports: [FormsModule, CommonModule, SetupRoutingModule ]
})
export class SetupModule { }
