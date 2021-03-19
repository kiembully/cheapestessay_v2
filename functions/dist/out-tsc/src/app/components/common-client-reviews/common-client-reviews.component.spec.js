import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonClientReviewsComponent } from './common-client-reviews.component';
describe('CommonClientReviewsComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonClientReviewsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonClientReviewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-client-reviews.component.spec.js.map