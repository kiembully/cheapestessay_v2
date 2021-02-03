import { Component, OnInit } from '@angular/core';
import { loggedin_session } from 'src/app/data/ui-services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private _session: loggedin_session,private router: Router,) { }

  invoice:any = [];
  order_value:any = [];

  ngOnInit(): void {
    this.avoidInvoice();
    this.invoice = JSON.parse(localStorage.getItem('invoice'))
    console.log(this.invoice)
  }

  ngOnDestroy() {
    localStorage.removeItem('invoice')
  }

  pushOrderValue() {
    this.order_summary_sections = [
      this.invoice.order_data.order_id,

    ]
  }

  order_summary_sections: any = [
    'Order ID',
    'Type Of Service',
    'Academic Level',
    'Page(S)',
    'Slide(S)',
    'Turnitin Plagiarism',
    'Deadline',
    'Fully Paid On',
    'Subtotal',
    'Total'
  ]

  
  avoidInvoice(): boolean {
    if (this._session.isTokenExisting('invoice')) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }

}
