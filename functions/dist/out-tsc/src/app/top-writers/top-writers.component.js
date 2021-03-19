import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { new_order_form_default } from '../data/data';
import { loggedin_session } from '../data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let TopWritersComponent = class TopWritersComponent {
    constructor(_auth, _data, router, _session) {
        this._auth = _auth;
        this._data = _data;
        this.router = router;
        this._session = _session;
        this.hireWriterForm = this._data.setOrders;
        this.displayedColumns = ['user_name', 'profile_pic', 'description', 'hire_button'];
        this.displayedColumnsM = ['user_name'];
        this.isProgressLoading = false;
    }
    displayWriters() {
        this._auth.getTopWritersProfile().subscribe(res => {
            console.log(res);
            this.dataSource = new MatTableDataSource(res.data);
        });
    }
    ngOnInit() {
        this.hireWriterForm.patchValue({
            preferred_writer: "my_previous_writer",
            user_token: localStorage.getItem('user_token')
        });
        this.displayWriters();
        this.hireWriterForm.valueChanges.subscribe((value) => {
            this.setOrder(value);
        });
    }
    setWriter(id) {
        this.hireWriterForm.patchValue({
            writer_id: id,
        });
    }
    setOrder(value) {
        this.isProgressLoading = true;
        this._auth.getOrderOptions(value).subscribe(res => {
            console.log(jwt_decode(res.data.order_token).writer_id);
            this.isProgressLoading = false;
            localStorage.setItem('set_order_token', res.data.order_token);
            this.router.navigate(['/order']);
        });
    }
    getRate(val) {
        return (val / 5) * 100 + '%';
    }
};
TopWritersComponent = __decorate([
    Component({
        selector: 'app-top-writers',
        templateUrl: './top-writers.component.html',
        providers: [ApiServices, new_order_form_default, loggedin_session],
        styleUrls: ['./top-writers.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], TopWritersComponent);
export { TopWritersComponent };
//# sourceMappingURL=top-writers.component.js.map