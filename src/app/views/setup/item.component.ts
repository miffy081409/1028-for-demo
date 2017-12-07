import { Component } from '@angular/core';
import { TestDataService, Item } from '../../services/testdata.service';


@Component({
  templateUrl: 'item.component.html'
})
export class ItemComponent {

  Items : Item[] = new Array<Item>();

  constructor(private service: TestDataService) { 
    this.LoadData();
  }

  async LoadData(){
    this.Items = await this.service.getItems();
  }
}