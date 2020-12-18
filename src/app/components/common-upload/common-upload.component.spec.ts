import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUploadComponent } from './common-upload.component';

describe('CommonUploadComponent', () => {
  let component: CommonUploadComponent;
  let fixture: ComponentFixture<CommonUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
