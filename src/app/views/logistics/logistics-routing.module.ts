import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRouteComponent } from './newroute.component';
import { RouteComponent } from './route.component';
import { DispatchComponent } from './dispatch.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Logistics'
    },
    children: [
      {
        path: 'new-route',
        component: NewRouteComponent,
        data: {
          title: 'Route Info'
        }
      },
      {
        path: 'route-mgnt',
        component: RouteComponent,
        data: {
          title: 'Route Management'
        }
      },
      {
        path: 'new-dispatch',
        component: NewRouteComponent,
        data: {
          title: 'Dispatch Info'
        }
      },
      {
        path: 'dispatch-mgnt',
        component: DispatchComponent,
        data: {
          title: 'Dispatch Management'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticsRoutingModule {}