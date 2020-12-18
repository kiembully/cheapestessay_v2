import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonOrderDetailsPaymentComponent } from './common-order-details-payment.component';

describe('CommonOrderDetailsPaymentComponent', () => {
  let component: CommonOrderDetailsPaymentComponent;
  let fixture: ComponentFixture<CommonOrderDetailsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonOrderDetailsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonOrderDetailsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
