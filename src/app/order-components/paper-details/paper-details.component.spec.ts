import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaperDetailsComponent } from './paper-details.component';

describe('PaperDetailsComponent', () => {
  let component: PaperDetailsComponent;
  let fixture: ComponentFixture<PaperDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
