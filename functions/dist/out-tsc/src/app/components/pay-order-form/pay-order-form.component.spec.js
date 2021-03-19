import { TestBed, waitForAsync } from '@angular/core/testing';
import { PayOrderFormComponent } from './pay-order-form.component';
describe('PayOrderFormComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PayOrderFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PayOrderFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pay-order-form.component.spec.js.map