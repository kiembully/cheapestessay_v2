import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDiscountBannerComponent } from './common-discount-banner.component';

describe('CommonDiscountBannerComponent', () => {
  let component: CommonDiscountBannerComponent;
  let fixture: ComponentFixture<CommonDiscountBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDiscountBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDiscountBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
