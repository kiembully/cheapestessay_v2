import { TestBed, waitForAsync } from '@angular/core/testing';
import { PrivacyPolicyComponent } from './privacy-policy.component';
describe('PrivacyPolicyComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PrivacyPolicyComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PrivacyPolicyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=privacy-policy.component.spec.js.map