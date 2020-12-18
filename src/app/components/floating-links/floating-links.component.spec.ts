import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLinksComponent } from './floating-links.component';

describe('FloatingLinksComponent', () => {
  let component: FloatingLinksComponent;
  let fixture: ComponentFixture<FloatingLinksComponent>;

  beforeEach(async(() => {
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
