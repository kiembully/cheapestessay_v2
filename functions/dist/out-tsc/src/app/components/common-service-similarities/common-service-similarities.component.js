import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { service_object } from 'src/app/data/data';
import { user_functions } from 'src/app/data/user-data';
let CommonServiceSimilaritiesComponent = class CommonServiceSimilaritiesComponent {
    constructor(router, _service, route, _user) {
        this.router = router;
        this._service = _service;
        this.route = route;
        this._user = _user;
        this.isInServices = false;
        this.similarities = [];
        this.url = this.route.snapshot.paramMap.get('id');
        this.isMoreSimilaritiesHidden = false;
    }
    ngOnInit() {
        const simService = this._service.similarities;
        if (simService.find(item => item.service === this.url) == null) {
            this.similarities = this.isSimilaritieSpecial(this.url, simService);
        }
        else {
            const targetId = simService.find(item => item.service === this.url);
            const filteredObjects = simService.filter(item => item.id === targetId.id && item.service != this.url);
            const parent_arr = { service: this.getParentUrl(targetId.id), id: targetId.id };
            filteredObjects.unshift(parent_arr);
            this.similarities = filteredObjects;
        }
    }
    splitArray(arr) {
        const result = [[], [], [], []]; //we create it, then we'll fill it
        const n = 4;
        const objectsPerLine = Math.ceil(arr.length / 4);
        for (let line = 0; line < n; line++) {
            for (let i = 0; i < objectsPerLine; i++) {
                if (this.url != arr[i].service) {
                    const value = arr[i + line * objectsPerLine];
                    if (!value)
                        continue; //avoid adding "undefined" values
                    result[line].push(value);
                }
            }
        }
        return result;
    }
    toServices(id) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['', id]);
        });
    }
    getName(link) {
        return link.replace(/-/g, ' ');
    }
    toggleSimilarities() {
        this.isMoreSimilaritiesHidden = !this.isMoreSimilaritiesHidden;
    }
    isSimilaritieSpecial(id, obj) {
        const arr = [
            { name: 'essay-writing-services', id: 1, sub_service: 0 },
            { name: 'research-paper-writing-services', id: 3, sub_service: 0 },
            { name: 'coursework-writing-services', id: 25, sub_service: 0 },
            { name: 'case-study-writing', id: 8, sub_service: 0 },
            { name: 'assignment-writing-service', id: 68, sub_service: 0 },
        ];
        const hasSimilarities = arr.some(item => item.name === id);
        if (hasSimilarities) {
            // const targetObject  = arr.find(item => item.name === id);
            const targetId = arr.find(item => item.name === id);
            const filteredObjects = obj.filter(item => item.id === targetId.id);
            return filteredObjects;
        }
        else {
            if (this._user.getCurrentPath() == 'services') {
                const filteredObjects = obj.filter(item => item.id === 1);
                return filteredObjects;
            }
            else {
                return obj;
            }
        }
    }
    getParentUrl(id) {
        switch (id) {
            case 1: {
                return 'essay-writing-services';
            }
            case 3: {
                return 'research-paper-writing-services';
            }
            case 25: {
                return 'coursework-writing-wervices';
            }
            case 8: {
                return 'case-study-writing';
            }
            case 9: {
                return 'assignment-writing-service';
            }
        }
    }
};
__decorate([
    Input()
], CommonServiceSimilaritiesComponent.prototype, "isInServices", void 0);
CommonServiceSimilaritiesComponent = __decorate([
    Component({
        selector: 'app-common-service-similarities',
        templateUrl: './common-service-similarities.component.html',
        styleUrls: ['./common-service-similarities.component.css'],
        providers: [service_object, user_functions],
        encapsulation: ViewEncapsulation.None,
    })
], CommonServiceSimilaritiesComponent);
export { CommonServiceSimilaritiesComponent };
//# sourceMappingURL=common-service-similarities.component.js.map