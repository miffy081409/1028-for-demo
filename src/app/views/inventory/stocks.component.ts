import { Component } from '@angular/core';

import { TestDataService, Stock } from '../../services/testdata.service';

@Component({
  templateUrl: 'stocks.component.html'
})
export class StocksComponent {
  
  Stocks: Stock[] = new Array<Stock>();

  constructor(private service: TestDataService) { 
    this.Stocks = this.service.getStocks();
  }

}