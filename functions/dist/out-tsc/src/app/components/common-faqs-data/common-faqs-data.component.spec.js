import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonFaqsDataComponent } from './common-faqs-data.component';
describe('CommonFaqsDataComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonFaqsDataComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonFaqsDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-faqs-data.component.spec.js.map