import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Stock } from '../../model/stock';
import { StockItemComponent } from './stock-item.component';
import { By } from '@angular/platform-browser';

describe('StockItemComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    component.stock=new Stock("Test Stock","TSC",85,80);
    fixture.detectChanges();
  });

  //bug在这里，name直接log出来是有内容的，但是调用textContext以后变成undefined.不明白哪里有问题
  it ("should create stock and render data",()=>{
    const name=fixture.nativeElement.querySelector('.stock-container .name h3');
    expect(name.textContext).toEqual("Test Stock");
    const price=fixture.debugElement.query(By.css('.positive'));
    expect(price.nativeElement.textContext).toEqual("$85");
  })
});
