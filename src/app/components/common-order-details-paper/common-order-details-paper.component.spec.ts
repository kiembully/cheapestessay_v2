import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonOrderDetailsPaperComponent } from './common-order-details-paper.component';

describe('CommonOrderDetailsPaperComponent', () => {
  let component: CommonOrderDetailsPaperComponent;
  let fixture: ComponentFixture<CommonOrderDetailsPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonOrderDetailsPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonOrderDetailsPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
