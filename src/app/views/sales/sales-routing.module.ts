import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquiryComponent } from './inquiry.component';
import { OrderComponent } from './order.component';
import { NewOrderComponent } from './neworder.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sales'
    },
    children: [
      {
        path: 'order',
        component: NewOrderComponent,
        data: {
          title: 'Order Info'
        }
      },
      {
        path: 'order-list',
        component: OrderComponent,
        data: {
          title: 'Order List'
        }
      },
      {
        path: 'inquiry',
        component: InquiryComponent,
        data: {
          title: 'Sales Inquiry'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {}