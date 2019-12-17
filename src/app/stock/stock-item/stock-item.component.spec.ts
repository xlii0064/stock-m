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

  it ("should create stock and render data",()=>{
    const name=fixture.debugElement.query(By.css('.stock-container.name'));
    expect(name.nativeElement.textContext).toEqual("Test Stock - TSC");
    const price=fixture.debugElement.query(By.css('.price.positive'));
    expect(price.nativeElement.textContext).toEqual("$85");
  })
});
