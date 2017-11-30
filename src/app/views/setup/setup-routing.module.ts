import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { ItemComponent } from './item.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master Data'
    },
    children: [
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: 'Customer'
        }
      },
      {
        path: 'item',
        component: ItemComponent,
        data: {
          title: 'Item'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}