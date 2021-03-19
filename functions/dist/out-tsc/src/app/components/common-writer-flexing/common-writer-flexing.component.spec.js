import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonWriterFlexingComponent } from './common-writer-flexing.component';
describe('CommonWriterFlexingComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonWriterFlexingComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonWriterFlexingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-writer-flexing.component.spec.js.map