import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonClientReviewsComponent } from './common-client-reviews.component';

describe('CommonClientReviewsComponent', () => {
  let component: CommonClientReviewsComponent;
  let fixture: ComponentFixture<CommonClientReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonClientReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonClientReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
