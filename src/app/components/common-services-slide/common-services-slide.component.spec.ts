import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonServicesSlideComponent } from './common-services-slide.component';

describe('CommonServicesSlideComponent', () => {
  let component: CommonServicesSlideComponent;
  let fixture: ComponentFixture<CommonServicesSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonServicesSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonServicesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
