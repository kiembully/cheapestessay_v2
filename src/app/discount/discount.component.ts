import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {CommonDialogComponent} from '../dialogs/common-dialog/common-dialog.component';
import {ApiServices} from 'src/app/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class DiscountComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _auth: ApiServices,
    private titleService: Title,
    private metaTagService: Meta
    ) { }

  tokenForm = new FormGroup({
    user_token: new FormControl(this._auth.getToken())
  })

  public couponCode:any = 'fetching data...';
  public referralLink:any = 'fetching data...';
  isCopyDisabled: boolean = false;
  displayDiscount() {
    this.isCopyDisabled = true;
    this._auth.getDiscount(this.tokenForm.value).subscribe(
      res => {
        if (res.status) {
          this.couponCode = res.data.code;
          this.referralLink = res.data.link;
          this.isCopyDisabled = false;
        } else {
          this.couponCode = 'Not yet availble';
          this.referralLink = 'Not yet availble';
          this.isCopyDisabled = true;
        }
      }
    )
  }

  ngOnInit(): void {
    this.titleService.setTitle("Save Money through Discounts and Promo Codes - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "n/a" },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "n/a" },
    );
    
    this.displayDiscount();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '700px',
      width: '1000px',
      backdropClass: 'common-dialog',
      panelClass: 'panel-dialog',
      data: {
        // displays discount how it works component
        content_id: 5
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
