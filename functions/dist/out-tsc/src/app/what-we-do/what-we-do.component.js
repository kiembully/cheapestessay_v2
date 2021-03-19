import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { new_order_form_default } from 'src/app/data/data';
import { loggedin_session } from '../data/ui-services';
let WhatWeDoComponent = class WhatWeDoComponent {
    constructor(_auth, _data, router, titleService, metaTagService, _session) {
        this._auth = _auth;
        this._data = _data;
        this.router = router;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this._session = _session;
        this.frmRegister = new FormGroup({
            fx: new FormControl('freeQuote'),
            email: new FormControl('')
        });
        this.isProgressLoading = false;
        this.newOrderForm = this._data.setOrders;
    }
    setPapers() {
        this._auth.getPapers().subscribe(res => {
            this.pPapers = res[0].data;
            this.oPapers = res[1].data;
        });
    }
    ngOnInit() {
        this.titleService.setTitle("What we do - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "N/A" });
        this.metaTagService.updateTag({ name: 'keywords', content: "what we do" });
        this.setPapers();
    }
    submitNewUser() {
        console.log(this.emailInput);
        // this.isProgressLoading = true;
        // this._auth.registerLogin(this.frmRegister.value).subscribe(
        //   res=>{
        //     this.isProgressLoading = false;
        //     if (res.status) {
        //       this.router.navigate(['order'])
        //     } else {
        //       this._session.messageSnackbar(res.message, 'OK');
        //     }
        //   }
        // )
    }
    setPaper() {
        this.newOrderForm.patchValue({
            paper: this.emailInput
        });
        this._auth.getOrderOptions(this.newOrderForm.value);
    }
};
WhatWeDoComponent = __decorate([
    Component({
        selector: 'app-what-we-do',
        templateUrl: './what-we-do.component.html',
        styleUrls: ['./what-we-do.component.css'],
        providers: [ApiServices, new_order_form_default, loggedin_session],
        encapsulation: ViewEncapsulation.None,
    })
], WhatWeDoComponent);
export { WhatWeDoComponent };
//# sourceMappingURL=what-we-do.component.js.map