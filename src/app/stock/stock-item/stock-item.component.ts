import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock:Stock;
  public stockClasses;
  constructor() { }

  ngOnInit() {
    this.stock=new Stock("Test Stock","TSC",85,80);
    let largeChange=Math.abs((this.stock.price/this.stock.previousPrice)-1)>0.01;
    this.stockClasses={
      "positive":this.stock.isPositiveChange(),
      "negative":!this.stock.isPositiveChange(),
      "large-change":largeChange,
      "small-change":!largeChange
    }
  }

  toggleFav(){
    this.stock.favourite = !this.stock.favourite;
  }

}
