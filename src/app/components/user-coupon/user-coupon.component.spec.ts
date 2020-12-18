import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCouponComponent } from './user-coupon.component';

describe('UserCouponComponent', () => {
  let component: UserCouponComponent;
  let fixture: ComponentFixture<UserCouponComponent>;

  beforeEach(async(() => {
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
