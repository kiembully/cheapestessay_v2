import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSubpagesHeaderComponent } from './common-subpages-header.component';

describe('CommonSubpagesHeaderComponent', () => {
  let component: CommonSubpagesHeaderComponent;
  let fixture: ComponentFixture<CommonSubpagesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSubpagesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSubpagesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
