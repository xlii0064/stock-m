import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'Stock Market';

  public stockObj:Stock;
  public index:number;

  ngOnInit():void{
    this.stockObj=new Stock("Test Stock","TSC",85,80);
    this.index=0;
  }
  toggleFav(){
    this.stockObj.favourite= !this.stockObj.favourite;
  }
  changeStock(){
    this.index++;
    this.stockObj=new Stock("Test Stock"+this.index,"TSC",85,80);
  }
  changePrice(){
    this.stockObj.price++;
  }
}
