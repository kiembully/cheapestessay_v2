import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RateWriterComponent } from './rate-writer.component';

describe('RateWriterComponent', () => {
  let component: RateWriterComponent;
  let fixture: ComponentFixture<RateWriterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RateWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
