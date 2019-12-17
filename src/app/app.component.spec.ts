import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Stock} from './model/stock';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  describe('',()=>{
    it(`should have an initialized stock object on ngInit`, () => {
      const appCom=new AppComponent();
      expect(appCom.stockObj).toBeUndefined();
      appCom.ngOnInit();
      expect(appCom.stockObj).toEqual(new Stock("Test Stock","TSC",85,80));
    });
  });

  describe('aware test',()=>{
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          StockItemComponent
        ],
      }).compileComponents();
    }));

    beforeEach(async(()=>{
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it("should initialize stocks",()=>{
      const title=fixture.debugElement.query(By.css('h1'));
      expect(title.nativeElement.textContent.trim()).toEqual('Fantastic Stock Market!');
    })

  });


});

