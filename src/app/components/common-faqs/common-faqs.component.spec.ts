import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonFaqsComponent } from './common-faqs.component';

describe('CommonFaqsComponent', () => {
  let component: CommonFaqsComponent;
  let fixture: ComponentFixture<CommonFaqsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
