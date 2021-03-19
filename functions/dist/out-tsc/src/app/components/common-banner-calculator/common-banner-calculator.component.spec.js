import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonBannerCalculatorComponent } from './common-banner-calculator.component';
describe('CommonBannerCalculatorComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonBannerCalculatorComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonBannerCalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-banner-calculator.component.spec.js.map