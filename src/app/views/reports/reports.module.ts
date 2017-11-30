import { NgModule } from '@angular/core';

import { TablesComponent } from './tables.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [ ReportsRoutingModule ],
  declarations: [ TablesComponent ]
})
export class ReportsModule { }
