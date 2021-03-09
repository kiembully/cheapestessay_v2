import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoneyBackGuaranteeComponent } from './money-back-guarantee.component';

describe('MoneyBackGuaranteeComponent', () => {
  let component: MoneyBackGuaranteeComponent;
  let fixture: ComponentFixture<MoneyBackGuaranteeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyBackGuaranteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyBackGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
