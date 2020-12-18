import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonOrderDetailsStatusComponent } from './common-order-details-status.component';

describe('CommonOrderDetailsStatusComponent', () => {
  let component: CommonOrderDetailsStatusComponent;
  let fixture: ComponentFixture<CommonOrderDetailsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonOrderDetailsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonOrderDetailsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
