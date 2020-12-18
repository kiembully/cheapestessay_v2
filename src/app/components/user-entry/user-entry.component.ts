import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { Router } from '@angular/router';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class UserEntryComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    firstname: new FormControl('User Firstname'),
    lastname: new FormControl('User Lastname'),
    mobile: new FormControl(''),
    mobile_prefix: new FormControl("1")
  })
  
  constructor(
    private _auth: ApiServices,
    public router: Router,
    public dialogRef:MatDialogRef<CommonDialogComponent>,
  ) { }

  public country_code:any;
  getCountryCode() {
    this.isProgressLoading = true;
      this._auth.getCountryCode().subscribe(
        res => {
          this.country_code = res;
          this.isProgressLoading = false;
        }
      );
  }
  
  formHasError:boolean = false;
  errorMessage:string = '';
  loginUser() {
    this.isProgressLoading = true;
    this._auth.getLogin(this.loginForm.value).subscribe(
      res => {
        this.isProgressLoading = false;
        this.errorMessage = res.message;
        this.formHasError = (res.status == false) ? true : false;
        if (res.status == true) {
          localStorage.removeItem('discount_token');
          localStorage.setItem('user_token', res.data.user_token);
          this.dialogRef.close();
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['order']);
          });
        }
      },
      err => {
        console.log(err);
        this.isProgressLoading = false;
      }
    )
  }
  signupHasError:boolean = false;
  suErrMessage:string = '';
  registerUser() {
    this.isProgressLoading = true;
    this._auth.registerLogin(this.registerForm.value).subscribe(
      res => {
        this.suErrMessage = res.message;
        this.signupHasError = (res.status == false) ? true : false;
        if (res.status == true) {
          this._auth.getLogin(this.registerForm.value).subscribe(
            resp => {
              localStorage.setItem('user_token', resp.data.user_token);
              this.dialogRef.close();
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['order']);
              });
            }
          )
        }
        this.isProgressLoading = false;
      },
      err => {
        console.log(err);
        this.isProgressLoading = false;
      }
    )
  }

  // progress bar status 
  isProgressLoading:boolean = false;

  ngOnInit(): void {
    this.getCountryCode(); 
  }
}