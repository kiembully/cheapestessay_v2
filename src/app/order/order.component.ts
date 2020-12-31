import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { new_order_form_default } from '../data/data';
import { loggedin_session } from '../data/ui-services';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [ApiServices, new_order_form_default, loggedin_session],
  encapsulation: ViewEncapsulation.None,
})
export class OrderComponent implements OnInit {

  is_user_logged_in: any;
  user_token_form = new FormGroup({
    user_token: new FormControl(this._auth.getToken()),
  })
  
  constructor(
    private _auth: ApiServices,
    public _session: loggedin_session
  ) { }

  ngOnInit(): void {
    this.is_user_logged_in
    this.getOrderdetails();
  }

  isProgressLoading:boolean = false;
  // get order data
  order_data: any;
  getOrderdetails() {
    this.isProgressLoading = true;
    this._auth.getOrderDetails().subscribe(res => {
      this.order_data = res;
      console.log(res)
      this.isProgressLoading = false;
    })
  }

  // behaviors 
  isFlexEnd: any;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(window.pageYOffset);
    this.isFlexEnd = this.change_position(window.pageYOffset)
  }
  change_position(e) {
    let state: boolean;
    if (this._session.isTokenExisting('user_token')) {
      if (this.demo1TabIndex === 0) {
        state = (e > 1030) ? true : false;
      } else if (this.demo1TabIndex === 1) {
        state = (e > 656) ? true : false;
      } else if (this.demo1TabIndex === 2) {
        state = (e > 270) ? true : false;
      }
    } else {
      state = (e > 1200) ? true : false;
    }
    return state;
  }

  // tab navigation
  public btnNavCaption = 'Continue';
  public demo1TabIndex = 0;
  public btnNavigateOrderTab() {
    const tabCount = 3;
    this.demo1TabIndex = (this.demo1TabIndex < 2) ? (this.demo1TabIndex + 1) % tabCount : 2;
    this.btnNavCaption = (this.demo1TabIndex === 2) ? 'Payment' : 'Continue'
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  public tabClicked() {
    this.btnNavCaption = (this.demo1TabIndex === 2) ? 'Payment' : 'Continue'
  }
  
}
