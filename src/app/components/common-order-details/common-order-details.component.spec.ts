import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonOrderDetailsComponent } from './common-order-details.component';

describe('CommonOrderDetailsComponent', () => {
  let component: CommonOrderDetailsComponent;
  let fixture: ComponentFixture<CommonOrderDetailsComponent>;

  beforeEach(async(() => {
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
