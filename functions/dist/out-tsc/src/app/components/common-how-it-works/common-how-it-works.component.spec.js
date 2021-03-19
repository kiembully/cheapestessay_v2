import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonHowItWorksComponent } from './common-how-it-works.component';
describe('CommonHowItWorksComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonHowItWorksComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonHowItWorksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-how-it-works.component.spec.js.map