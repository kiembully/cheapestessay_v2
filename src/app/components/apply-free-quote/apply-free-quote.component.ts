import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-apply-free-quote',
  templateUrl: './apply-free-quote.component.html',
  styleUrls: ['./apply-free-quote.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ApplyFreeQuoteComponent implements OnInit {

  freeQuoteForm = new FormGroup({
    email: new FormControl(''),
    fx: new FormControl('freeQuote'),
    service: new FormControl(0),
    paper: new FormControl(0),
    page: new FormControl(0),
    total: new FormControl(0),
  })

  constructor(
    private _auth: ApiServices,
    public router: Router,
    public dialogRef:MatDialogRef<CommonDialogComponent>,
  ) { }

  decoded_order_token: any;
  ngOnInit(): void {
    this.decoded_order_token = jwt_decode(localStorage.getItem('set_order_token'));
    this.freeQuoteForm.patchValue({
      service: this.decoded_order_token.service,
      paper: this.decoded_order_token.paper,
      page: this.decoded_order_token.page,
      total: this.decoded_order_token.total,
    })
  }

  formHasError:boolean = false;
  errorMessage:string = '';
  isProgressLoading:boolean = false;
  applyFreeQuote() {
    this.isProgressLoading = true;
    this._auth.registerLogin(this.freeQuoteForm.value).subscribe(
      res => {
        console.log(res);
        this.isProgressLoading = false;
        this.errorMessage = res.message;
        this.formHasError = (res.status == false) ? true : false;
        if (res.status == true) {
          localStorage.setItem('user_token', res.data.user_token);
          this.dialogRef.close();
          this.router.navigate(['order']).then(() => {
            window.location.reload();
          });
        }
      }
    )
  }

}
