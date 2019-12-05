import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public name:string;
  public code:string;
  public price:number;
  public previousPrice:number;
  public positiveChange:boolean;
  public favourite:boolean;
  constructor() { }

  ngOnInit() {
    this.name='test stock';
    this.code='TS';
    this.price=85;
    this.previousPrice=80;
    this.positiveChange= this.previousPrice < this.price;
    this.favourite=false;
  }

  toggleFav(){
    this.favourite = !this.favourite;
  }

}
