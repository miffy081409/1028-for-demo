import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TestDataService, SalesOrder, Customer } from '../../services/testdata.service';

@Component({
  templateUrl: 'neworder.component.html'
})
export class NewOrderComponent {

  Model:SalesOrder = new SalesOrder();

  constructor(private router: Router, private route: ActivatedRoute, private service: TestDataService) {
    this.Model.Customer = new Customer();
    this.LoadData();
  }

  async LoadData(){
    let transNo: string = this.route.snapshot.queryParams['transactionNo'];
    if(transNo != undefined){
      this.Model = await this.service.getOrderByTransaction(transNo);
    }
  }
}