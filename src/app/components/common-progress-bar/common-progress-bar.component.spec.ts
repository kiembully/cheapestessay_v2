import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonProgressBarComponent } from './common-progress-bar.component';

describe('CommonProgressBarComponent', () => {
  let component: CommonProgressBarComponent;
  let fixture: ComponentFixture<CommonProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
