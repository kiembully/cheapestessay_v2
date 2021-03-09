import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnnouncementDialogComponent } from './announcement-dialog.component';

describe('AnnouncementDialogComponent', () => {
  let component: AnnouncementDialogComponent;
  let fixture: ComponentFixture<AnnouncementDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
