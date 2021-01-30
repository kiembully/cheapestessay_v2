import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { countdownTimer, DialogTriggers } from 'src/app/data/ui-services';
import { ActivatedRoute, Router } from '@angular/router';

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
  rate: any = [1,2,3,4,5]
  
  constructor(public _timer: countdownTimer, public _trigger: DialogTriggers, public route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
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

  preventTimerDisplay(time: number) {
    let arr = ['Completed', 'Temporary Order'];
    let new_time:any;
    for (let i = 0; i < arr.length - 1; i++) {
      new_time = (arr[i] == this.order_details.status.order_status) ? 0 : time
    }
    return new_time
  }

  setActiveStars(rate, index) {
    let star = '';
    star = (rate > index) ? 'star' : 'star_outline';
    return star;
  }

  payOrder(id) {
    this.router.navigate(['/stripe-checkout', id]);
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    clearInterval(this.timer);
  }

}
