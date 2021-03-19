import { TestBed, waitForAsync } from '@angular/core/testing';
import { WhatWeDoComponent } from './what-we-do.component';
describe('WhatWeDoComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WhatWeDoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(WhatWeDoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=what-we-do.component.spec.js.map