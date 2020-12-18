import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDialogMessageComponent } from './common-dialog-message.component';

describe('CommonDialogMessageComponent', () => {
  let component: CommonDialogMessageComponent;
  let fixture: ComponentFixture<CommonDialogMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDialogMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDialogMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
