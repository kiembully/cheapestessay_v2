import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCompanyFlexingComponent } from './common-company-flexing.component';

describe('CommonCompanyFlexingComponent', () => {
  let component: CommonCompanyFlexingComponent;
  let fixture: ComponentFixture<CommonCompanyFlexingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCompanyFlexingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCompanyFlexingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
