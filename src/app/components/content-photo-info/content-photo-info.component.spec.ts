import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentPhotoInfoComponent } from './content-photo-info.component';

describe('ContentPhotoInfoComponent', () => {
  let component: ContentPhotoInfoComponent;
  let fixture: ComponentFixture<ContentPhotoInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPhotoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPhotoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
