import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonOrderDetailsFilesComponent } from './common-order-details-files.component';
describe('CommonOrderDetailsFilesComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonOrderDetailsFilesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonOrderDetailsFilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-order-details-files.component.spec.js.map