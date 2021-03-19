import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { new_order_form_default } from '../data/data';
import { loggedin_session } from '../data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let WritersProfileComponent = class WritersProfileComponent {
    constructor(route, _auth, _data, router, _session) {
        this.route = route;
        this._auth = _auth;
        this._data = _data;
        this.router = router;
        this._session = _session;
        this.hireWriterForm = this._data.setOrders;
        this.displayedColumns = [
            // 'addedon',
            // 'customer_no',
            'rating_number',
        ];
        this.isProgressLoading = false;
        this.frmWritersProfile = new FormGroup({
            writer_id: new FormControl('')
        });
    }
    ngOnInit() {
        this.frmWritersProfile.patchValue({
            writer_id: this.route.snapshot.paramMap.get('id')
        });
        this.getWritersProfile();
        this.hireWriterForm.patchValue({
            preferred_writer: "my_previous_writer",
            writer_id: this.route.snapshot.paramMap.get('id'),
        });
    }
    getWritersProfile() {
        this.isProgressLoading = true;
        this._auth.getWritersProfile(this.frmWritersProfile.value).subscribe(res => {
            this.isProgressLoading = false;
            console.log(res.data);
            this.writers_data = res.data;
            this.dataSource = new MatTableDataSource(res.data.reviews);
            this.dataSource.sort = this.sort;
            setTimeout(() => {
                this.dataSource.sort = this.sort;
            });
        });
    }
    hireWriter() {
        this.isProgressLoading = true;
        this._auth.getOrderOptions(this.hireWriterForm.value).subscribe(res => {
            console.log(jwt_decode(res.data.order_token).writer_id);
            this.isProgressLoading = false;
            localStorage.setItem('set_order_token', res.data.order_token);
            this.router.navigate(['/order']);
        });
    }
};
__decorate([
    ViewChild(MatSort)
], WritersProfileComponent.prototype, "sort", void 0);
WritersProfileComponent = __decorate([
    Component({
        selector: 'app-writers-profile',
        templateUrl: './writers-profile.component.html',
        providers: [ApiServices, new_order_form_default, loggedin_session],
        styleUrls: ['./writers-profile.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], WritersProfileComponent);
export { WritersProfileComponent };
//# sourceMappingURL=writers-profile.component.js.map