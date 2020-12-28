import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonGuaranteesContentComponent } from './common-guarantees-content.component';

describe('CommonGuaranteesContentComponent', () => {
  let component: CommonGuaranteesContentComponent;
  let fixture: ComponentFixture<CommonGuaranteesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonGuaranteesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonGuaranteesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
