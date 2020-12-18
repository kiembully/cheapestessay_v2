import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProgressBarComponent } from './common-progress-bar.component';

describe('CommonProgressBarComponent', () => {
  let component: CommonProgressBarComponent;
  let fixture: ComponentFixture<CommonProgressBarComponent>;

  beforeEach(async(() => {
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
