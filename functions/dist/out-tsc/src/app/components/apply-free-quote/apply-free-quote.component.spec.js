import { TestBed, waitForAsync } from '@angular/core/testing';
import { ApplyFreeQuoteComponent } from './apply-free-quote.component';
describe('ApplyFreeQuoteComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ApplyFreeQuoteComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ApplyFreeQuoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=apply-free-quote.component.spec.js.map