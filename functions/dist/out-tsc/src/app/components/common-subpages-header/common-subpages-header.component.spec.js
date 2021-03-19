import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonSubpagesHeaderComponent } from './common-subpages-header.component';
describe('CommonSubpagesHeaderComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonSubpagesHeaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonSubpagesHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-subpages-header.component.spec.js.map