import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {ApiServices} from 'src/app/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';

@Component({
  selector: 'app-rate-writer',
  templateUrl: './rate-writer.component.html',
  providers: [ApiServices],
  styleUrls: ['./rate-writer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RateWriterComponent implements OnInit {

  @Input() public rate: any;
  @Input() public order_id: any;
  rating: any = [1,2,3,4,5];
  frmRating = new FormGroup({
    user_token: new FormControl(),
    order_id: new FormControl(),
    remark: new FormControl('', [Validators.required]),
    rate: new FormControl()
  })
  isProgressLoading:any = false;

  constructor(private _auth: ApiServices, public dialogRef:MatDialogRef<CommonDialogComponent>) { }

  ngOnInit(): void {
    this.patchFrmRating();
  }

  errorMessage:any = '';
  submitRate() {
    this.isProgressLoading = true;
    this._auth.rateWriter(this.frmRating.value).subscribe(
      res => {
        this.isProgressLoading = false;
        if (!res.status) {
          this.errorMessage = res.message;
        }
        // setTimeout(() => {
        //   this.closeDialog();
        // }, 500);
      }
    )
  }

  patchFrmRating() {
    this.frmRating.patchValue({
      user_token: localStorage.getItem('user_token'),
      order_id: this.order_id,
      rate: this.rate,
    })
  }

  patchRating(rate) {
    this.frmRating.patchValue({
      rate: rate
    })
  }

  setActiveStars(rate, index) {
    let star = '';
    star = (rate > index) ? 'star' : 'star_outline';
    return star;
  }

  getErrorRemarkOption() {
    if (this.frmRating.controls.remark.hasError('required')) {
      return this.errorMessage;
    }
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
