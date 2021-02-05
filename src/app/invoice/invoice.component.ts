import { Component, OnInit } from '@angular/core';
import { loggedin_session } from 'src/app/data/ui-services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  providers: [loggedin_session],
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private _session: loggedin_session,private router: Router,) { }

  invoice:any = [];

  ngOnInit(): void {
    this.avoidInvoice();
    this.invoice = JSON.parse(localStorage.getItem('invoice'))
    console.log(this.invoice)
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

}
