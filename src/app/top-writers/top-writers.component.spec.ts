import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWritersComponent } from './top-writers.component';

describe('TopWritersComponent', () => {
  let component: TopWritersComponent;
  let fixture: ComponentFixture<TopWritersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWritersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
