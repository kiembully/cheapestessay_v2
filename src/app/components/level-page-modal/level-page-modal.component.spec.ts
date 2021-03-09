import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LevelPageModalComponent } from './level-page-modal.component';

describe('LevelPageModalComponent', () => {
  let component: LevelPageModalComponent;
  let fixture: ComponentFixture<LevelPageModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelPageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelPageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
