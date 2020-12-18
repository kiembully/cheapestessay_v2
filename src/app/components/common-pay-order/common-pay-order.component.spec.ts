import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPayOrderComponent } from './common-pay-order.component';

describe('CommonPayOrderComponent', () => {
  let component: CommonPayOrderComponent;
  let fixture: ComponentFixture<CommonPayOrderComponent>;

  beforeEach(async(() => {
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
