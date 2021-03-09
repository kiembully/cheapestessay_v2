import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApplyFreeQuoteComponent } from './apply-free-quote.component';

describe('ApplyFreeQuoteComponent', () => {
  let component: ApplyFreeQuoteComponent;
  let fixture: ComponentFixture<ApplyFreeQuoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyFreeQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyFreeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
