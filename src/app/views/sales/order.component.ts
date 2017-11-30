import { Component } from '@angular/core';

class OrderModel {
    ID:string;
    Customer: string;
    SalesMan: string;
    Date: Date = new Date();
    Amount: number;
    Status:string;
}

@Component({
    templateUrl: 'order.component.html'
})
export class OrderComponent {
    Orders: OrderModel[] = new Array<OrderModel>();

    constructor() { 
        this.generateTestData();
    }

    generateTestData() {
        for(let i = 1;i <= 10;i++){
            this.Orders.push(this.createRandomOrder(i));
        }
    }

    createRandomOrder(id: number): OrderModel {
        let order = new OrderModel();
        order.Date.setDate(new Date().getDate()-id);
        order.ID = "SO-00000" + id;
        if(id % 2 == 0){
            order.Customer = "HiSpeed";
            order.SalesMan = "Chuckie";
            order.Amount = 10000;
        }
        else{
            order.Customer = "Calderon";
            order.SalesMan = "Reggie";
            order.Amount = 15000;
        }

        let result = Math.floor(Math.random() * 6) + 1  
        
        if(result % 2 == 0){
            order.Status = "Pending";
        }
        else{
            order.Status = "Approved";
        }

        return order;
    }
}