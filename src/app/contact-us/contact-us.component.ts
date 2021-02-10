import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsComponent implements OnInit {

  constructor(
    private _auth: ApiServices,
    private _snackBar: MatSnackBar,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  submitContact() {
    this._auth.getContactDetails(this.frmContact.value).subscribe(res=>{
      if (res.status == true) {
        this._snackBar.open(res.message, 'OK');
        this.frmContact.reset();
        Object.keys(this.frmContact.controls).forEach(key => {
          this.frmContact.get(key).setErrors(null) ;
        });
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("24/7 Writing Services Available | Contact Us | Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Our writing services are available 24/7. You can contact us by social media, mobile and email. Visit us now! We will be happy to help you." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "Contact us, Contact CheapestEssay" },
    );
  }

  frmContact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })

  getErrorMessage() {
    if (this.frmContact.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.frmContact.controls.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageName() {
    if (this.frmContact.controls.name.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getErrorMessageOption() {
    if (this.frmContact.controls.message.hasError('required')) {
      return 'You must enter a value';
    }
  }
  openLink(url) {
    window.location.href = url;
  }

}
