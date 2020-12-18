import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { countdownTimer, DialogTriggers } from 'src/app/data/ui-services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-order-details-status',
  templateUrl: './common-order-details-status.component.html',
  styleUrls: ['./common-order-details-status.component.css'],
  providers: [countdownTimer, DialogTriggers],
  encapsulation: ViewEncapsulation.None,
})
export class CommonOrderDetailsStatusComponent implements OnInit {

  @Input() public order_details: any;
  timer: any;
  
  constructor(public _timer: countdownTimer, public _trigger: DialogTriggers, public route: ActivatedRoute) { }

  ngOnInit(): void {;
    this.timer = setInterval( () => {
      this._timer.readDeadline(this._timer.getDeadline(
        this.order_details.order_date,
        this.order_details.days,
        this.order_details.hours,
        this.order_details.minutes,
        this.order_details.seconds
      ))
    })
  }

  isPaid(): boolean {
    let status = this.order_details.status.payment_flag;
    let value = (status > 0) ? true : false;
    return value;
  }

  getBtnPaymentDisplay() {
    let value = ''
    value = (this.isPaid()) ? 'Paid' : 'Pay';
    return value;
  }

  getPaymentStatusDisplay(val) {
    let newclass = ''
    if (val == 1) {
      newclass = 'btn-waiting'
    } else if (val == 3) {
      newclass = 'btn-processing'
    } else if (val == 2) {
      newclass = 'btn-paid'
    } else {
      newclass = 'btn-processing'
    }
    return newclass
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    clearInterval(this.timer);
  }

}
