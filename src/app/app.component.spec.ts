import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Stock} from './model/stock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it(`should have an initialized stock object on ngInit`, () => {
    const appCom=new AppComponent();
    expect(appCom.stockObj).toBeUndefined();
    appCom.ngOnInit();
    expect(appCom.stockObj).toEqual(new Stock("Test Stock","TSC",85,80));
  });
});
