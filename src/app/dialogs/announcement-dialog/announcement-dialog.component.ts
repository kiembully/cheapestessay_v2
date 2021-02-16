import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiServices } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement-dialog',
  templateUrl: './announcement-dialog.component.html',
  styleUrls: ['./announcement-dialog.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class AnnouncementDialogComponent implements OnInit {

  isProgressLoading: boolean = false;
  agreement = new FormControl(false);

  frmNewUser = new FormGroup({
    email: new FormControl({value:'', disabled:this.isTokenExisting('user_token')}, [Validators.required, Validators.email]),
    fx: new FormControl('freeQuote')
  })
  frmCouponCode = new FormGroup({
    order_token: new FormControl(''),
    coupon_code: new FormControl(''),
    user_token: new FormControl('')
  })

  constructor(
    public dialogRef: MatDialogRef<AnnouncementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _auth: ApiServices,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.frmCouponCode.patchValue({
      order_token: localStorage.getItem('set_order_token'),
      coupon_code: 'SIGNUP15',
      user_token: ''
    })
  }

  frmError = new FormGroup({
    hasError: new FormControl(false),
    text_error: new FormControl('')
  })
  submitNewUser() {
    this.isProgressLoading = true;
    this._auth.registerLogin(this.frmNewUser.value).subscribe(
      res => {
        this.isProgressLoading = false;
        console.log(res);
        if (res.status) {
          localStorage.setItem('user_token', res.data);
          this.getCouponCode(this.frmCouponCode.value)
          this.frmError.patchValue({hasError: res.status, text_error: res.message})
        } else {
          this.frmError.patchValue({hasError: res.status, text_error: res.message})
          // this._session.messageSnackbar(res.message, 'OK')
        }
      }
    )
  }

  getCouponCode(form) {
    this._auth.getCouponCode(form).subscribe(res=>{
      if (res.status) {
        localStorage.setItem('discount_token', res.data.discount_token);
        this.router.navigate(['order'])
      } else {
        if (res.message == "Accesstoken has Expired!") {
          // this._session.openSnackBar(res.message, 'OK')
          this.router.navigate(['/']);
        } else {
          localStorage.setItem('discount_token', 'invalid');
          this.router.navigate(['order'])
        }
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    if (this.frmNewUser.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.frmNewUser.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  isTokenExisting(name) {
    const token = localStorage.getItem(name);
    let status = (token);
    return status;
  }

}

export interface DialogData {
  content_id: number;
}