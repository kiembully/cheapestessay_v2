import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArabicComponent } from './arabic.component';

describe('ArabicComponent', () => {
  let component: ArabicComponent;
  let fixture: ComponentFixture<ArabicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
