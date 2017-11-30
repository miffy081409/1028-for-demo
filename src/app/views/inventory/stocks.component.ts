import { Component } from '@angular/core';

class ItemModel{
  ID:string;
  ItemName:string;
  Category:string;
  Description:string;
  UM:string;
  HasEnoughQty:boolean;
}

@Component({
  templateUrl: 'stocks.component.html'
})
export class StocksComponent {
  Items: ItemModel[] = new Array<ItemModel>();
  constructor() { }

  generateTestData(){
    for(let i = 1;i <= 10;i++){
      this.Items.push(this.createRandomItem(i));
  }
  }

  createRandomItem(id:number): ItemModel{
    let item = new ItemModel();
    item.ID = "ITM-00000" + id;
    
    return item;
  }
}