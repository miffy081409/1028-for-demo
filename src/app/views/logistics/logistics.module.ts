import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { LogisticsRoutingModule } from './logistics-routing.module';
import { NewRouteComponent } from './newroute.component';
import { RouteComponent } from './route.component';
import { DispatchComponent } from './dispatch.component';

@NgModule({
  declarations: [ NewRouteComponent, RouteComponent, DispatchComponent ],
  imports: [FormsModule, CommonModule, LogisticsRoutingModule ]
})
export class LogisticsModule { }
