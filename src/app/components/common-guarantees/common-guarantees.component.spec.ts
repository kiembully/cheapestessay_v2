import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonGuaranteesComponent } from './common-guarantees.component';

describe('CommonGuaranteesComponent', () => {
  let component: CommonGuaranteesComponent;
  let fixture: ComponentFixture<CommonGuaranteesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonGuaranteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonGuaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
