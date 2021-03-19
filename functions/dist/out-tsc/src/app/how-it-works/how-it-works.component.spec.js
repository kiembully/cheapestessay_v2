import { TestBed, waitForAsync } from '@angular/core/testing';
import { HowItWorksComponent } from './how-it-works.component';
describe('HowItWorksComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HowItWorksComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HowItWorksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=how-it-works.component.spec.js.map