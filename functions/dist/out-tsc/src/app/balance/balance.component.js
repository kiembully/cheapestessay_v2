import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
let BalanceComponent = class BalanceComponent {
    constructor(_auth, titleService, metaTagService, router) {
        this._auth = _auth;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.router = router;
        this.tokenForm = new FormGroup({
            user_token: new FormControl(this._auth.getToken())
        });
        this.isProgressLoading = false;
        this.displayedColumns = ['date', 'transaction_text', 'journal_text', 'transaction_amount', 'current_wallet_balance'];
        this.displayedColumnsMob = ['journal_text'];
        this.myBalance = 'fetching...';
        this.isEmpty = false;
    }
    displayBalance() {
        this.isProgressLoading = true;
        this._auth.getBalance(this.tokenForm.value).subscribe(res => {
            this.myBalance = (!res.total_balance) ? 0 : res.total_balance;
            this.dataSource = new MatTableDataSource(res.data);
            this.dataSource.paginator = this.paginator;
            this.isProgressLoading = false;
            this.isEmpty = (res.data == undefined);
        });
    }
    viewOrder(id) {
        this.router.navigate(['/my-orders/order-details', id]);
    }
    gained(val) {
        let state = (val.indexOf('+') > -1);
        return state;
    }
    ngOnInit() {
        this.titleService.setTitle("Balance to Buy Essay Papers Online - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "n/a" });
        this.metaTagService.updateTag({ name: 'keywords', content: "buy essay papers online" });
        this.displayBalance();
    }
};
__decorate([
    ViewChild(MatPaginator)
], BalanceComponent.prototype, "paginator", void 0);
BalanceComponent = __decorate([
    Component({
        selector: 'app-balance',
        templateUrl: './balance.component.html',
        styleUrls: ['./balance.component.css'],
        providers: [ApiServices],
        encapsulation: ViewEncapsulation.None,
    })
], BalanceComponent);
export { BalanceComponent };
//# sourceMappingURL=balance.component.js.map