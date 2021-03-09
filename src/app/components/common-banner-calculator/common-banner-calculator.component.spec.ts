import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonBannerCalculatorComponent } from './common-banner-calculator.component';

describe('CommonBannerCalculatorComponent', () => {
  let component: CommonBannerCalculatorComponent;
  let fixture: ComponentFixture<CommonBannerCalculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonBannerCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonBannerCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
