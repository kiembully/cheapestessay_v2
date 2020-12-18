import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOrderFormComponent } from './pay-order-form.component';

describe('PayOrderFormComponent', () => {
  let component: PayOrderFormComponent;
  let fixture: ComponentFixture<PayOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
