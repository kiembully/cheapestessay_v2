import { Component, OnInit } from '@angular/core';
import { loggedin_session } from 'src/app/data/ui-services'
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, shareReplay} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  providers: [loggedin_session],
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  isProgressLoading:boolean = false;
  isPaymentSuccess: boolean = true;

  constructor(
    private _session: loggedin_session,
    private router: Router,
    public route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  invoice:any = [];
  token: string;
  PayerID: string;
  _baseUrl: string;

  frmInvoice = new FormGroup({
    token: new FormControl(),
    PayerID: new FormControl()
  })
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.frmInvoice.patchValue({
        token: params['token'],
        PayerID: params['PayerID']
      })
    });

    if (this.frmInvoice.value.token == undefined && this.frmInvoice.value.PayerID == undefined) {
      this.invoice = JSON.parse(localStorage.getItem('invoice'));
    } else {
      this.setOutput()
    }
    // this.avoidInvoice();
  }

  ngOnDestroy() {
    localStorage.removeItem('invoice');
  }
  
  avoidInvoice(): boolean {
    if (this._session.isTokenExisting('invoice')) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }

  translateValue(val) {
    return (val == 0) ? 'No' : val
  }

  setOutput() {
    this.isProgressLoading = true;

    this._baseUrl = 'https://web.cheapestessay.com/invoice?token='+this.frmInvoice.value.token+'&PayerID='+this.frmInvoice.value.PayerID
    return this.http.post<any>(this._baseUrl, this.frmInvoice.value).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        ).subscribe(
        res => {
        this.isProgressLoading = false;
        if (res.status) {
          localStorage.setItem('invoice', JSON.stringify(res.data));
          this.invoice = JSON.parse(localStorage.getItem('invoice'));
        } else {
          this.isPaymentSuccess = false;
        }
      }
    )
  }

}
