import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonOrderDetailsStatusComponent } from './common-order-details-status.component';
describe('CommonOrderDetailsStatusComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonOrderDetailsStatusComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonOrderDetailsStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-order-details-status.component.spec.js.map