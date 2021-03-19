import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonDialogMessageComponent } from './common-dialog-message.component';
describe('CommonDialogMessageComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonDialogMessageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonDialogMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-dialog-message.component.spec.js.map