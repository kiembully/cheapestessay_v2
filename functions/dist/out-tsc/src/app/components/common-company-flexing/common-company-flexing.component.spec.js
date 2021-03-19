import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonCompanyFlexingComponent } from './common-company-flexing.component';
describe('CommonCompanyFlexingComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonCompanyFlexingComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonCompanyFlexingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-company-flexing.component.spec.js.map