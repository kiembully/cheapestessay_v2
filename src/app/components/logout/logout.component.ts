import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef:MatDialogRef<CommonDialogComponent>,
    ) { }

  ngOnInit(): void {
  }

  logoutUser() {
      this.dialogRef.close();
      localStorage.clear();
      this.router.navigate(['/']);
  }

}
