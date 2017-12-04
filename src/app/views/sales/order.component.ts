import { Component } from '@angular/core';

import { TestDataService, SalesOrder } from '../../services/testdata.service';


@Component({
    templateUrl: 'order.component.html'
})
export class OrderComponent {
    Orders: SalesOrder[] = new Array<SalesOrder>();

    constructor(private service : TestDataService) { 
        this.Orders = this.service.getSalesOrder();
    }
}