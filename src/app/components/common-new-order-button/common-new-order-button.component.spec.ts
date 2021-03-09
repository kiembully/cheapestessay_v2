import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonNewOrderButtonComponent } from './common-new-order-button.component';

describe('CommonNewOrderButtonComponent', () => {
  let component: CommonNewOrderButtonComponent;
  let fixture: ComponentFixture<CommonNewOrderButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonNewOrderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNewOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
