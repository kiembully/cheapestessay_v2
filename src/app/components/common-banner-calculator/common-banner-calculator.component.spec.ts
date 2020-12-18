import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBannerCalculatorComponent } from './common-banner-calculator.component';

describe('CommonBannerCalculatorComponent', () => {
  let component: CommonBannerCalculatorComponent;
  let fixture: ComponentFixture<CommonBannerCalculatorComponent>;

  beforeEach(async(() => {
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
