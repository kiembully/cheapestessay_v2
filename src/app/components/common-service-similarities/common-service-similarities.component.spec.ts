import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonServiceSimilaritiesComponent } from './common-service-similarities.component';

describe('CommonServiceSimilaritiesComponent', () => {
  let component: CommonServiceSimilaritiesComponent;
  let fixture: ComponentFixture<CommonServiceSimilaritiesComponent>;

  beforeEach(async(() => {
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
