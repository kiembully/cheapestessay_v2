import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileTabComponent } from './profile-tab.component';

describe('ProfileTabComponent', () => {
  let component: ProfileTabComponent;
  let fixture: ComponentFixture<ProfileTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
