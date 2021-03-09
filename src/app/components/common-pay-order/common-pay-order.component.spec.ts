import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonPayOrderComponent } from './common-pay-order.component';

describe('CommonPayOrderComponent', () => {
  let component: CommonPayOrderComponent;
  let fixture: ComponentFixture<CommonPayOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPayOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPayOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
