import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonOrderDetailsPaymentComponent } from './common-order-details-payment.component';
describe('CommonOrderDetailsPaymentComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonOrderDetailsPaymentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonOrderDetailsPaymentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-order-details-payment.component.spec.js.map