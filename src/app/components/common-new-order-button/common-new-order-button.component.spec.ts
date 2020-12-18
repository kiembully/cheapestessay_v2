import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNewOrderButtonComponent } from './common-new-order-button.component';

describe('CommonNewOrderButtonComponent', () => {
  let component: CommonNewOrderButtonComponent;
  let fixture: ComponentFixture<CommonNewOrderButtonComponent>;

  beforeEach(async(() => {
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
