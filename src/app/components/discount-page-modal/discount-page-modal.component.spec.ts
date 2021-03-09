import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiscountPageModalComponent } from './discount-page-modal.component';

describe('DiscountPageModalComponent', () => {
  let component: DiscountPageModalComponent;
  let fixture: ComponentFixture<DiscountPageModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountPageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountPageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
