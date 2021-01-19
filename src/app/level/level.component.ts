import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CommonDialogComponent} from '../dialogs/common-dialog/common-dialog.component';
import {ApiServices} from 'src/app/api.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class LevelComponent implements OnInit {

  constructor(public dialog: MatDialog,private _auth: ApiServices) { }

  tokenForm = new FormGroup({
    user_token: new FormControl(this._auth.getToken())
  })

  currentLevel:any = '';
  nextLevel:any = '';
  currentVal:number = 0;
  maximumVal:number = 0;
  minimumVal:number = 0;
  percentageVal:number = 0;
  remainingVal:any = 0;
  displayLevel() {
    this._auth.getLevel(this.tokenForm.value).subscribe(
      res => {
        this.currentLevel = res.data.user_level;
        this.currentVal = res.data.valuenow;
        this.minimumVal = res.data.valuemin
        this.maximumVal = res.data.valuemax;
        this.percentageVal = res.data.percent;
        this.remainingVal = (this.maximumVal - this.currentVal).toFixed(2);
      }
    )
  }

  ngOnInit(): void {
    this.displayLevel()
  }

  openDialog() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '700px',
      width: '1000px',
      backdropClass: 'common-dialog',
      panelClass: 'panel-dialog',
      data: {
        // displays level how it works component
        content_id: 6,
        user_level: this.currentLevel
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  getNextLevel(level) {
    let nextLevel:any;
    switch(level.toLowerCase()) {
      case 'vip':
        nextLevel = 'Top';
        break;
      case 'gold':
        nextLevel = 'VIP';
        break;
      case 'silver':
        nextLevel = 'Gold';
        break;
      default:
        nextLevel = 'Silver';
    }
    return nextLevel;
  }

}
