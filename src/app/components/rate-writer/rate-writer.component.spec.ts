import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateWriterComponent } from './rate-writer.component';

describe('RateWriterComponent', () => {
  let component: RateWriterComponent;
  let fixture: ComponentFixture<RateWriterComponent>;

  beforeEach(async(() => {
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
