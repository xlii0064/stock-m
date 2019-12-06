import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  //public stock:Stock;
  public stocks:Array<Stock>=[]; //typescript array 需要初始化才能执行array函数操作
  //public stockStyle;
  constructor() { }

  ngOnInit() {
    //this.stock=new Stock("Test Stock","TSC",85,80);
    this.stocks.push(new Stock("Test Stock","TSC",85,80));
    this.stocks.push(new Stock("Second Stock","ST",100,10));
    this.stocks.push(new Stock("Third Stock","TS",10,11));
    /*
    let largeChange=Math.abs((this.stock.price/this.stock.previousPrice)-1)>0.01;
    this.stockStyle={
      "color":this.stock.isPositiveChange() ? "darkred" : "lightgreen",
      "font-size":largeChange ? "1.2em" :"0.8em"
    }
    */
  }

  toggleFav(index:number){
    this.stocks[index].favourite = !this.stocks[index].favourite;
  }

}
