import { TestBed, waitForAsync } from '@angular/core/testing';
import { DiscountPageModalComponent } from './discount-page-modal.component';
describe('DiscountPageModalComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DiscountPageModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DiscountPageModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=discount-page-modal.component.spec.js.map