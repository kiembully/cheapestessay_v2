import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import {new_order_form_default} from 'src/app/data/data';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { loggedin_session } from '../data/ui-services';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css'],
  providers: [ApiServices, new_order_form_default, loggedin_session],
  encapsulation: ViewEncapsulation.None,
})
export class WhatWeDoComponent implements OnInit {

  frmRegister = new FormGroup({
    fx: new FormControl('freeQuote'),
    email: new FormControl('')
  })
  emailInput: any;
  isProgressLoading: boolean = false;
  
  constructor(
    private _auth: ApiServices,
    private _data: new_order_form_default,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta,
    public _session: loggedin_session
  ) { }

  newOrderForm:any = this._data.setOrders;

  pPapers: any;
  oPapers: any;
  setPapers() {
    this._auth.getPapers().subscribe(res=>{
      this.pPapers = res[0].data;
      this.oPapers = res[1].data;
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle("What we do - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "N/A" },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "what we do" },
    );

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
    })
    this._auth.getOrderOptions(this.newOrderForm.value);
  }

}
