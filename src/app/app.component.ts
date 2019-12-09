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

  ngOnInit():void{
    this.stockObj=new Stock("Test Stock","TSC",85,80);
  }
}
