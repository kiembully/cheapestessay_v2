import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonFaqsDataComponent } from './common-faqs-data.component';

describe('CommonFaqsDataComponent', () => {
  let component: CommonFaqsDataComponent;
  let fixture: ComponentFixture<CommonFaqsDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFaqsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFaqsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
