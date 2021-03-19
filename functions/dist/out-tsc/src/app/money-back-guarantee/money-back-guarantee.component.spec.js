import { TestBed, waitForAsync } from '@angular/core/testing';
import { MoneyBackGuaranteeComponent } from './money-back-guarantee.component';
describe('MoneyBackGuaranteeComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MoneyBackGuaranteeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MoneyBackGuaranteeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=money-back-guarantee.component.spec.js.map