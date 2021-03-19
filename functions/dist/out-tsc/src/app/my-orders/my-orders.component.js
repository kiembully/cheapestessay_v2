import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { DialogTriggers, countdownTimer } from 'src/app/data/ui-services';
let MyOrdersComponent = class MyOrdersComponent {
    constructor(_auth, router, _dialogTrigger, _timer, titleService, metaTagService) {
        this._auth = _auth;
        this.router = router;
        this._dialogTrigger = _dialogTrigger;
        this._timer = _timer;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.tokenForm = new FormGroup({
            user_token: new FormControl(localStorage.getItem('user_token'))
        });
        this.isProgressLoading = false;
        this.isEmpty = false;
        this.filter = [
            { value: 7, viewValue: 'All Orders' },
            { value: 0, viewValue: 'Unpaid Orders' },
            { value: 1, viewValue: 'Orders in Progress' },
            { value: 2, viewValue: 'Completed' },
            { value: 3, viewValue: 'Revision Orders' },
            { value: 5, viewValue: 'Cancelled' },
            { value: 6, viewValue: 'Refunded' },
        ];
        this.selected = new FormControl(7);
        this.displayedColumns = ['button', 'order_id', 'date_added', 'total', 'pages', 'topic', 'order_status', 'deadline', 'action', 'open'];
        this.displayedColumnsM = ['order_id'];
        this.timer_status = false;
    }
    displayMyOrders() {
        this.isProgressLoading = true;
        this._auth.getMyOrders(this.tokenForm.value).subscribe(res => {
            this.dataSource = new MatTableDataSource(res.data);
            this.dataSource.paginator = this.paginator;
            this.isProgressLoading = false;
            this.isEmpty = (res.data == undefined) ? true : false;
        });
    }
    setTimer(order_date, days, hours, minutes, seconds) {
        let timestamp = this._timer.getDeadline(order_date, days, hours, minutes, seconds);
        return this._timer.displayDeadline(timestamp);
    }
    ngOnInit() {
        this.titleService.setTitle("Buy Essay Online | Hire Writers - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "Buy essays online and get professional assistance with any writing tasks from our experienced and skilled writers. Place order and get quality paper." });
        this.metaTagService.updateTag({ name: 'keywords', content: "Buy essay online, hire writers" });
        this.displayMyOrders();
        setInterval(() => { }, 1000);
    }
    ngOnDestroy() {
        // Will clear when component is destroyed e.g. route is navigated away from.
        clearInterval();
    }
    ngAfterViewInit() {
    }
    getOrderStatusDisplay(p_description, p_status) {
        let state;
        if (p_status > 0 && (p_description == 3 || p_description == 9 || p_description == 11)) {
            state = '#3B7CFF';
            this.timer_status = true;
        }
        else {
            this.timer_status = false;
            if (p_description == 2) {
                state = '#13B675';
            }
            else if ((p_status == 3) || (p_description == 9) || p_description == 11) {
                state = '#3B7CFF';
            }
            else if ((p_description == 4) || p_description == 12) {
                state = '#F5A623';
            }
            else {
                state = '#D0555A';
            }
        }
        return state;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    payOrder(id) {
        this.router.navigate(['/stripe-checkout', id]);
    }
};
__decorate([
    ViewChild(MatPaginator)
], MyOrdersComponent.prototype, "paginator", void 0);
MyOrdersComponent = __decorate([
    Component({
        selector: 'app-my-orders',
        templateUrl: './my-orders.component.html',
        styleUrls: ['./my-orders.component.css'],
        providers: [ApiServices, DialogTriggers, countdownTimer],
        encapsulation: ViewEncapsulation.None,
    })
], MyOrdersComponent);
export { MyOrdersComponent };
//# sourceMappingURL=my-orders.component.js.map