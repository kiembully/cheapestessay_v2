import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonWriterFlexingComponent } from './common-writer-flexing.component';

describe('CommonWriterFlexingComponent', () => {
  let component: CommonWriterFlexingComponent;
  let fixture: ComponentFixture<CommonWriterFlexingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonWriterFlexingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonWriterFlexingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
