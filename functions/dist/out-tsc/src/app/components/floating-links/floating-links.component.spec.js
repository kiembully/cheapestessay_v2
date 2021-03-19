import { TestBed, waitForAsync } from '@angular/core/testing';
import { FloatingLinksComponent } from './floating-links.component';
describe('FloatingLinksComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FloatingLinksComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FloatingLinksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=floating-links.component.spec.js.map