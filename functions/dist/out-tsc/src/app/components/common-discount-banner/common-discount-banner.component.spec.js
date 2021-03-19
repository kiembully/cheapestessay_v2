import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonDiscountBannerComponent } from './common-discount-banner.component';
describe('CommonDiscountBannerComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonDiscountBannerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonDiscountBannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-discount-banner.component.spec.js.map