import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonNewOrderButtonComponent } from './common-new-order-button.component';
describe('CommonNewOrderButtonComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonNewOrderButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonNewOrderButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-new-order-button.component.spec.js.map