import { TestBed, waitForAsync } from '@angular/core/testing';
import { NewOrderOutputComponent } from './new-order-output.component';
describe('NewOrderOutputComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NewOrderOutputComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NewOrderOutputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-order-output.component.spec.js.map