import { TestBed, waitForAsync } from '@angular/core/testing';
import { ContentPhotoInfoComponent } from './content-photo-info.component';
describe('ContentPhotoInfoComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ContentPhotoInfoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ContentPhotoInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=content-photo-info.component.spec.js.map