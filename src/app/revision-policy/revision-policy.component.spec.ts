import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RevisionPolicyComponent } from './revision-policy.component';

describe('RevisionPolicyComponent', () => {
  let component: RevisionPolicyComponent;
  let fixture: ComponentFixture<RevisionPolicyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
