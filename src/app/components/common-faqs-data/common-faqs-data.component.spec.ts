import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFaqsDataComponent } from './common-faqs-data.component';

describe('CommonFaqsDataComponent', () => {
  let component: CommonFaqsDataComponent;
  let fixture: ComponentFixture<CommonFaqsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFaqsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFaqsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
