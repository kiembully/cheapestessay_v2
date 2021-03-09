import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FloatingLinksComponent } from './floating-links.component';

describe('FloatingLinksComponent', () => {
  let component: FloatingLinksComponent;
  let fixture: ComponentFixture<FloatingLinksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
