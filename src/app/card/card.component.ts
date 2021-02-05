import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServices } from 'src/app/api.service';
import { loggedin_session } from 'src/app/data/ui-services'
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [ApiServices, loggedin_session],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private _auth: ApiServices,
    private _session: loggedin_session,
    ) { }

  isProgressLoading: boolean = false;
  isBillingAddressVisible: boolean = false;

  ngOnInit(): void {
    this.getCardDetails()
  }

  isSaveCardChecked: boolean = true;

  backToPayout(id) {
    this.router.navigate(['/stripe-checkout', id]);
  }

  monitorCvv() {
    let input = this.frmCard.value.cvv;
    this.isBillingAddressVisible = (input.length > 0) ? true : false;
  }

  frmCard = new FormGroup({
    card_firstname: new FormControl(),
    card_lastname: new FormControl(),
    cardnumber: new FormControl(),
    expiry: new FormControl(),
    country: new FormControl(),
    streetaddress: new FormControl(),
    state: new FormControl(),
    zipcode: new FormControl(),
    city: new FormControl(),
    cvv: new FormControl(),
    user_token: new FormControl(localStorage.getItem('user_token')),
  })

  frmUser = new FormGroup({
    user_token: new FormControl(localStorage.getItem('user_token')),
  })

  country_codes: any;
  getCardDetails() {
    this.isProgressLoading = true;
    this._auth.getCardDetails(this.frmUser.value).subscribe(
      res => {
        this.isProgressLoading = false;
        if (res.status) {
          let decoded_token = jwt_decode(res.data.card_token)
          this.frmCard.patchValue({
            card_firstname: decoded_token[0].cFName,
            card_lastname: decoded_token[0].cLName,
            cardnumber: decoded_token[0].cNo,
            expiry: decoded_token[0].expYear,
            country: decoded_token[0].country,
            streetaddress: decoded_token[0].address,
            state: decoded_token[0].state,
            zipcode: decoded_token[0].zip,
            city: decoded_token[0].city,
          })
        } else {
          this._session.messageSnackbar(res.message, 'OK')
        }
      }
    )
    this._auth.getCountryCode().subscribe(
      res=>{
        this.country_codes = res;
      }
    )
  }

  saveCardDetails() {
    this.isProgressLoading = true;
    this._auth.saveCardDetails(this.frmCard.value).subscribe(
      res=> {
        this.isProgressLoading = false;
        if (res.status) {
          this.router.navigate(['/stripe-checkout', this.route.snapshot.paramMap.get('id')]);
        } else {
          this._session.messageSnackbar(res.message, 'OK')
        }
      }
    )
  }

  deleteCardDetails() {
    this.isProgressLoading = true;
    this._auth.deleteCardDetails(this.frmCard.value).subscribe(
      res=>{
        this.isProgressLoading = false;
        if (res.status) {
          this.frmCard.reset();
          this.frmCard.patchValue({
            user_token: localStorage.getItem('user_token')
          })
        } else {
          this._session.messageSnackbar(res.message, 'OK')
        }
      }
    )
  }

  toggleCardUpdate() {
    if (this.isSaveCardChecked) {
      // this.saveCardDetails();
    } else {
      this.deleteCardDetails();
    }
  }

}
