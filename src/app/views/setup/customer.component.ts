import { Component } from '@angular/core';

import { TestDataService, Customer } from '../../services/testdata.service';

@Component({
  templateUrl: 'customer.component.html'
})
export class CustomerComponent {
  Customers: Customer[] = new Array<Customer>();

  constructor(private service: TestDataService) { 
    this.Customers = this.service.getCustomers();
  }

}