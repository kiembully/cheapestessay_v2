import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonGuaranteesContentComponent } from './common-guarantees-content.component';
describe('CommonGuaranteesContentComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CommonGuaranteesContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonGuaranteesContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=common-guarantees-content.component.spec.js.map