import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { service_object } from 'src/app/data/data';
let CommonServicesSlideComponent = class CommonServicesSlideComponent {
    constructor(_auth, _snackBar, router, _data, route) {
        this._auth = _auth;
        this._snackBar = _snackBar;
        this.router = router;
        this._data = _data;
        this.route = route;
        this.servicesOption = {
            loop: false,
            dots: true,
            margin: 10,
            nav: false,
            center: false,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    center: true,
                    loop: true
                },
                576: {
                    items: 1,
                    dots: true,
                    center: true,
                    loop: true
                },
                768: {
                    items: 2,
                    dots: true,
                    loop: true
                },
                992: {
                    items: 2,
                }
            }
        };
        this.servicesContent = [
            {
                data: [
                    { class: 'writer1_icon', title: 'W85', orders: '1,662', action: 'HIRE NOW' },
                    { class: 'writer2_icon', title: 'W16', orders: '1,604', action: 'HIRE NOW' },
                    { class: 'writer3_icon', title: 'W161', orders: '1,594', action: 'HIRE NOW' },
                    { class: 'writer4_icon', title: 'W23', orders: '1,575', action: 'HIRE NOW' },
                    { class: 'writer5_icon', title: 'W22', orders: '1,534', action: 'HIRE NOW' },
                    { class: 'writer6_icon', title: 'w31', orders: '1,310', action: 'HIRE NOW' },
                    { class: 'writer7_icon', title: 'W5', orders: '1,188', action: 'HIRE NOW' },
                    { class: 'writer8_icon', title: 'W80', orders: '1,111', action: 'HIRE NOW' },
                    { class: 'writer9_icon', title: 'W140', orders: '1,044', action: 'HIRE NOW' },
                    { class: 'writer10_icon', title: 'W61', orders: '1,002', action: 'HIRE NOW' },
                ]
            },
            {
                data: [
                    { class: "", title: 'Essay (Any Type)', orders: '36,466', action: 'ORDER NOW' },
                    { class: "", title: 'Research Paper', orders: '5,092', action: 'ORDER NOW' },
                    { class: "", title: 'Report', orders: '1,523', action: 'ORDER NOW' },
                    { class: "", title: 'Case Study', orders: '1,749', action: 'ORDER NOW' },
                    { class: "", title: 'Assignment', orders: '2,840', action: 'ORDER NOW' },
                    { class: "", title: 'Argumentative Essay', orders: '1,677', action: 'ORDER NOW' },
                    { class: "", title: 'Summary', orders: '1,301', action: 'ORDER NOW' },
                    { class: "", title: 'Coursework', orders: '1,482', action: 'ORDER NOW' },
                    { class: "", title: 'Critical Thinking', orders: '1,074', action: 'ORDER NOW' },
                    { class: "", title: 'PowerPoint Presentation', orders: '1,074', action: 'ORDER NOW' },
                ]
            }
        ];
        this.services = this._data.services;
        this.isProgressLoading = false;
        this.frmContact = new FormGroup({
            name: new FormControl('User'),
            email: new FormControl(''),
            message: new FormControl('This message was submitted thru Contact Us section.')
        });
        this.messagePositionH = 'center';
        this.messagePositionV = 'bottom';
    }
    getServicesContentData(param) {
        let data_id = (param) ? 0 : 1;
        return data_id;
    }
    ngOnInit() {
    }
    submitEmail() {
        this.isProgressLoading = true;
        this._auth.getContactDetails(this.frmContact.value).subscribe(res => {
            this.isProgressLoading = false;
            this._snackBar.open(res.message, 'OK', {
                duration: 3000,
                horizontalPosition: this.messagePositionH,
                verticalPosition: this.messagePositionV,
            });
        });
    }
    toServices(id) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['', id]);
        });
    }
};
__decorate([
    Input()
], CommonServicesSlideComponent.prototype, "isWriters", void 0);
CommonServicesSlideComponent = __decorate([
    Component({
        selector: 'app-common-services-slide',
        templateUrl: './common-services-slide.component.html',
        styleUrls: ['./common-services-slide.component.css'],
        providers: [service_object],
        encapsulation: ViewEncapsulation.None,
    })
], CommonServicesSlideComponent);
export { CommonServicesSlideComponent };
//# sourceMappingURL=common-services-slide.component.js.map