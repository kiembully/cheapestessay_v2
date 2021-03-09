import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserCouponComponent } from './user-coupon.component';

describe('UserCouponComponent', () => {
  let component: UserCouponComponent;
  let fixture: ComponentFixture<UserCouponComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
