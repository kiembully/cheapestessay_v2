import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonServicesSlideComponent } from './common-services-slide.component';
describe('CommonServicesSlideComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonServicesSlideComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonServicesSlideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-services-slide.component.spec.js.map