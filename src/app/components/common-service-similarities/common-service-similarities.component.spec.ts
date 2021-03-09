import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonServiceSimilaritiesComponent } from './common-service-similarities.component';

describe('CommonServiceSimilaritiesComponent', () => {
  let component: CommonServiceSimilaritiesComponent;
  let fixture: ComponentFixture<CommonServiceSimilaritiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonServiceSimilaritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonServiceSimilaritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
