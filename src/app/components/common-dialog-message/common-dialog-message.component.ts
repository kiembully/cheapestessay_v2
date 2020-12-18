import { Component, OnInit, Input } from '@angular/core';
import {ApiServices} from 'src/app/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-common-dialog-message',
  templateUrl: './common-dialog-message.component.html',
  providers: [ApiServices],
  styleUrls: ['./common-dialog-message.component.css']
})
export class CommonDialogMessageComponent implements OnInit {

  @Input() public order_id: number;

  constructor(
    private _auth: ApiServices,
    private router: Router,
    public dialogRef:MatDialogRef<CommonDialogComponent>) { }

  frmDeleteOrder = new FormGroup({
    user_token: new FormControl(''),
    order_id: new FormControl()
  })

  isProgressLoading: boolean = false;

  ngOnInit(): void {
    this.patchFrmDeleteOrder(this.order_id);
  }

  deleteOrder() {
    this.isProgressLoading = true;
    this._auth.deleteOrder(this.frmDeleteOrder.value).subscribe(
      (res) => {
        if (res.message) {
          localStorage.removeItem('order_token');
          this.isProgressLoading = false;
          this.dialogRef.close();
          this.router.navigate(['/my-orders']);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/my-orders']);
          });
        }
      }
    )
  }
  
  patchFrmDeleteOrder(id) {
    this.frmDeleteOrder.patchValue({
      user_token: localStorage.getItem('user_token'),
      order_id: id
    })
  }


}
