import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonOrderDetailsPaperComponent } from './common-order-details-paper.component';
describe('CommonOrderDetailsPaperComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonOrderDetailsPaperComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonOrderDetailsPaperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-order-details-paper.component.spec.js.map