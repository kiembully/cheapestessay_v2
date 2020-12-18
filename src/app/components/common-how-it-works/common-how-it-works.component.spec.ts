import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHowItWorksComponent } from './common-how-it-works.component';

describe('CommonHowItWorksComponent', () => {
  let component: CommonHowItWorksComponent;
  let fixture: ComponentFixture<CommonHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
