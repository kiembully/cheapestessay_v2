import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonOrderDetailsComponent } from './common-order-details.component';

describe('CommonOrderDetailsComponent', () => {
  let component: CommonOrderDetailsComponent;
  let fixture: ComponentFixture<CommonOrderDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
