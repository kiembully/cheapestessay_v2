import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonReviewsComponent } from './common-reviews.component';

describe('CommonReviewsComponent', () => {
  let component: CommonReviewsComponent;
  let fixture: ComponentFixture<CommonReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
