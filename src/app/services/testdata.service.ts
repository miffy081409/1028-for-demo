import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestDataService {
    BaseUrl:string = "http://localhost:9008/api";

    constructor(private http: HttpClient) {

    }

    async getCustomers(): Promise<Customer[]> {
        const res = await this.http.get(this.BaseUrl + '/customers/get-all').toPromise();
        return res as Customer[];

        // let list = new Array<Customer>();

        // list.push({ CustomerNo: 'CUST0001', Name: 'EC Calderon Construction Development, Inc.', Address: 'B. Suico, Pagsabungan Road,, Mandaue City, Cebu', IsActive: true });
        // list.push({ CustomerNo: 'CUST0002', Name: 'Hi-Speed Construction Corporation', Address: '800 A. S. Fortuna St, Mandaue City, 6014 Cebu', IsActive: true });
        // list.push({ CustomerNo: 'CUST0003', Name: 'Dakay Construction ', Address: 'Doña Modesta Gaisano St, Cebu City, Cebu', IsActive: true });

        // return list;
    }

    // async getCustomerByCustomerNo(customerNo: string): Promise<Customer> {
    //     return (await this.getCustomers()).filter(x => x.CustomerNo == customerNo)[0];
    // }

    async getItems(): Promise<Item[]> {
        const res = await this.http.get(this.BaseUrl + '/product/get-all').toPromise();
        return res as Item[];
        // let list = new Array<Item>();

        // list.push({ ItemNo: 'ITM0001', Name: 'CEMEX', Description: 'CEMEX APO Masonry Cement', UnitPrice: 150, IsActive: true });
        // list.push({ ItemNo: 'ITM0002', Name: 'Valspar 82020', Description: 'Valspar 82020 Gray Solid Color Concrete Sealer 1 Gallon', UnitPrice: 450, IsActive: true });
        // list.push({ ItemNo: 'ITM0003', Name: 'Rizal Cement', Description: 'Rizal Portland Super Type 1P cement', UnitPrice: 145, IsActive: true });
        // list.push({ ItemNo: 'ITM0004', Name: 'Island Cement', Description: 'Island Portland Type 1 Cement', UnitPrice: 140, IsActive: true });
        // list.push({ ItemNo: 'ITM0005', Name: 'Palitada King', Description: 'Palitada King Masonry Cement', UnitPrice: 130, IsActive: true });

        // return list;
    }

    // getItemByItemNo(itemNo: string): Item {
    //     return this.getItems().filter(x => x.ItemNo == itemNo)[0];
    // }


    async getStocks(): Promise<Stock[]> {
        let list = new Array<Stock>();
        let items = await this.getItems();

        let stockId = 1;
        for (let item of items) {
            let qty = Math.floor(Math.random() * 100) + 1;

            let stock = new Stock();
            stock.ID = stockId;
            stock.Item = item;
            stock.InStock = qty;
            stock.Available = qty;

            list.push(stock);
            stockId++;
        }

        return list;
    }

    async getSalesOrders(): Promise<SalesOrder[]> {
        const res = await this.http.get(this.BaseUrl + '/order/get-all').toPromise();
        return res as SalesOrder[];

        // let list = new Array<SalesOrder>();
        // let customers = this.getCustomers();

        // for (let ctr = 1; ctr <= 10; ctr++) {
        //     let id = ctr;

        //     let order = new SalesOrder();
        //     order.Date.setDate(new Date().getDate());

        //     order.SalesOrderNo = "SO-00000" + id;
        //     //order.Customer = customers[Math.floor(Math.random() * customers.length)];

        //     if (id % 2 == 0) {
        //         order.Salesman = "Chuckie";
        //     }
        //     else {
        //         order.Salesman = "Reggie";
        //     }

        //     order.Total = Math.round((Math.floor(Math.random() * 1500) + 500) / 10) * 10;

        //     let result = Math.floor(Math.random() * 3) + 1

        //     switch (result) {
        //         case 1:
        //             order.Status = "Cancelled";
        //             break;
        //         case 2:
        //             order.Status = "Approved";
        //             break;

        //         case 3:
        //             order.Status = "Pending";
        //             break;
        //     }

        //     list.push(order);
        // }

        // return list;
    }

    async getOrderByTransaction(transNo:string) : Promise<SalesOrder>{
        const res = await this.http.get(this.BaseUrl + '/order/get-order?transactionNo=' + transNo).toPromise();
        return res as SalesOrder;
    }

}

export class Customer {
    Name: string;
    Address: string;
    ContactNo:string;
    ContactPerson:string;
}

export class Item {
    ItemNo: string;
    Name: string;
    Description: string;
    IsActive: boolean;
    UnitPrice: number;
}

export class Stock {
    ID: number;
    Item: Item;
    InStock: number;
    Available: number;
}

export class SalesOrder {
    TransactionNo: string;
    Date: Date = new Date();
    Customer: Customer = new Customer();
    Total: number;
    Status: string;
}