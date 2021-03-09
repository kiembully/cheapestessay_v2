import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FreeQuoteComponent } from './free-quote.component';

describe('FreeQuoteComponent', () => {
  let component: FreeQuoteComponent;
  let fixture: ComponentFixture<FreeQuoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
