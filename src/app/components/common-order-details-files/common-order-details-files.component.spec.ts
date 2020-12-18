import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonOrderDetailsFilesComponent } from './common-order-details-files.component';

describe('CommonOrderDetailsFilesComponent', () => {
  let component: CommonOrderDetailsFilesComponent;
  let fixture: ComponentFixture<CommonOrderDetailsFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonOrderDetailsFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonOrderDetailsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
