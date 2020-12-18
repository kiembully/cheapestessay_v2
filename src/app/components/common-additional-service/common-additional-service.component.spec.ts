import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAdditionalServiceComponent } from './common-additional-service.component';

describe('CommonAdditionalServiceComponent', () => {
  let component: CommonAdditionalServiceComponent;
  let fixture: ComponentFixture<CommonAdditionalServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonAdditionalServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonAdditionalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
