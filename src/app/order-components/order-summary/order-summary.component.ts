import { Component, OnInit, HostListener } from '@angular/core';
import { loggedin_session } from '../../data/ui-services';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  providers: [loggedin_session],
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor(
    public _session: loggedin_session
  ) { }

  ngOnInit(): void {
  }

  isFixed:boolean = false;
  change_position(e) {
    let state: boolean;
    // state = (!this._session.isTokenExisting('user_token') ? state = (e >= 518) ? true : false : state = (e >= 345) ? true : false )
    if (this._session.isTokenExisting('user_token')) {
      state = ((e > 78) && (e < 1030)) ? true : false;
    } else {
      state = ((e > 305) && (e < 1257)) ? true : false;  
    }
    
    return state;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = this.change_position(window.pageYOffset)
  }

}
