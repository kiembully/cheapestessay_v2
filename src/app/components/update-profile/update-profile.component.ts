import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import { Router } from '@angular/router';
import { profile_form_default } from 'src/app/data/data';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  providers: [ApiServices, profile_form_default],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateProfileComponent implements OnInit {

  nameForm: any = this._data.nameForm;
  passwordForm: any = this._data.passwordForm;
  emailForm: any = this._data.emailForm;
  mobileForm: any = this._data.mobileForm;
  whatsAppForm: any = this._data.whatsAppForm;
  addressForm: any = this._data.addressForm;

  rewriteToken(new_token) {
    localStorage.removeItem('user_token');
    localStorage.setItem('user_token', new_token);
  }
  closeDialog() {
    setTimeout(() => {
      this.dialogRef.close()
    }, 1000);
  }

  public fullname:any;
  nameHasError:boolean = false;
  errorMessageName:string = '';
  isProgressLoading:boolean = false;
  updateFullName() {
    this.isProgressLoading = true;
    this._auth.getFullName(this.nameForm.value).subscribe(
      res => {
        this.errorMessageName = res.message;
        this.nameHasError = (!res.status) ? true : false;
        if(res.status == true) {
          this.rewriteToken(res.data.user_token);
          this.closeDialog();
        }
        this.isProgressLoading = false;
      }
    )
  }
  pswdHasError:boolean = false;
  errorMessagePswd:string = '';
  updatePassword() {
    this.isProgressLoading = true;
    this._auth.getPassword(this.passwordForm.value).subscribe(
      res => {
        this.errorMessagePswd = res.message;
        this.pswdHasError = (!res.status) ? true : false;
        if(res.status == true) {
          this.closeDialog();
        }
        this.isProgressLoading = false;
      }
    )
  }
  emailHasError:boolean = false;
  errorMessageEmail:string = ''
  updateEmail() {
    this.isProgressLoading = true;
    this._auth.getEmail(this.emailForm.value).subscribe(
      res => {
        this.errorMessageEmail = res.message;
        this.emailHasError = (!res.status) ? true : false;
        if(res.status == true) {
          this.rewriteToken(res.data.user_token);
          this.closeDialog();
        }
        this.isProgressLoading = false;
      }
    )
  }
  mobHasError:boolean = false;
  errorMessageMob:string = ''
  updateMobile() {
    this.isProgressLoading = true;
    this._auth.getMobile(this.mobileForm.value).subscribe(
      res => {
        this.errorMessageMob = res.message;
        this.mobHasError = (!res.status) ? true : false;
        if(res.status == true) {
          this.rewriteToken(res.data.user_token);
          this.closeDialog();
        }
        this.isProgressLoading = false;
      }
    )
  }

  waHasError:boolean = false;
  errorMessageWa:string = ''
  updateWhatsApp() {
    this.isProgressLoading = true;
    this._auth.getWhatsapp(this.whatsAppForm.value).subscribe(
      res => {
        console.log(res);
        this.errorMessageWa = res.message;
        this.waHasError = (!res.status) ? true : false;
        if(res.status == true) {
          this.rewriteToken(res.data.user_token);
          this.closeDialog();
        }
        this.isProgressLoading = false;
        // to do 
      }
    )
  }
  
  addressHasError:boolean = false;
  errorMessageAddress:string = ''
  updateAddress() {
    this.isProgressLoading = true;
    this._auth.getAddress(this.addressForm.value).subscribe(
      res => {
        this.errorMessageAddress = res.message;
        this.addressHasError = (!res.status) ? true : false;
        if(res.status == true) {
          this.rewriteToken(res.data.user_token);
          this.closeDialog();
        }
        this.isProgressLoading = false;
      }
    )
  }

  constructor(
    private _auth: ApiServices,
    public dialogRef:MatDialogRef<CommonDialogComponent>,
    public router: Router,
    private _data: profile_form_default) { }

  @Input() public form_id: number;
  @Input() public profile_data: any;

  ngOnInit(): void {
    this.patchNameForm();
    this.patchEmail();
    this.patchMobile();
    this.patchWhatsApp();
    this.patchAddress();
    this.patchPasswordForm();
    this.displayCountryCode();
  }
  
  patchNameForm() {
    this.nameForm.patchValue({
      first_name: this.profile_data.user_details.first_name,
      last_name: this.profile_data.user_details.last_name,
      user_token: this._auth.getToken()
    })
  }
  patchEmail() {
    this.emailForm.patchValue({
      email: this.profile_data.user_details.user_email,
      user_token: this._auth.getToken()
    })
  }
  patchMobile() {
    this.mobileForm.patchValue({
      telephone: this.profile_data.user_details.customer_telephone,
      prefix: this.profile_data.user_details.telephone_prefix,
      user_token: this._auth.getToken()
    })
  }
  patchWhatsApp() {
    this.whatsAppForm.patchValue({
      whatsapp_num: this.profile_data.user_details.whatsapp_number,
      user_token: this._auth.getToken()
    })
  }
  patchPrefix(e) {
    this.mobileForm.patchValue({
      prefix: '+' + e
    })
  }
  patchAddress() {
    this.addressForm.patchValue({
      street: this.profile_data.user_details.address,
      city: this.profile_data.user_details.city,
      state: this.profile_data.user_details.state,
      zipcode: this.profile_data.user_details.post_code,
      countrycode: this.profile_data.user_details.iso_code,
      country: this.profile_data.user_details.country,
      user_token: this._auth.getToken(),
    })
  }
  public country_code:any;
  displayCountryCode() {
    this.isProgressLoading = true;
    this._auth.getCountryCode().subscribe(
      res => {
        this.country_code = res;
        this.isProgressLoading = false;
      }
    );
  }
  patchPasswordForm() {
    this.passwordForm.patchValue({
      user_token: localStorage.getItem('user_token')
    })
  }

  resetUserToken(new_token) {
    localStorage.removeItem('user_token');
    localStorage.setItem('user_token',new_token);
  }

  selectedFlag: string = 'url(https://restcountries.eu/data/usa.svg)'
  selectedCode: string = 'url(https://restcountries.eu/data/usa.svg)'
  selectActiveFlag(code) {
    this.selectedFlag = 'url(https://restcountries.eu/data/' + code.toLowerCase() + '.svg)'
  }
  selectActiveCode(code) {
    this.selectedCode = 'url(https://restcountries.eu/data/' + code.toLowerCase() + '.svg)'
  }
}
