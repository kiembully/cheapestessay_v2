import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServicesDetailComponent } from './services-detail.component';

describe('ServicesDetailComponent', () => {
  let component: ServicesDetailComponent;
  let fixture: ComponentFixture<ServicesDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
