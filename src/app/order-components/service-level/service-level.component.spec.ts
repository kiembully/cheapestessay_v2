import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceLevelComponent } from './service-level.component';

describe('ServiceLevelComponent', () => {
  let component: ServiceLevelComponent;
  let fixture: ComponentFixture<ServiceLevelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
