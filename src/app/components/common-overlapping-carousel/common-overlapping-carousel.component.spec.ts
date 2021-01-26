import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonOverlappingCarouselComponent } from './common-overlapping-carousel.component';

describe('CommonOverlappingCarouselComponent', () => {
  let component: CommonOverlappingCarouselComponent;
  let fixture: ComponentFixture<CommonOverlappingCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonOverlappingCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonOverlappingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
