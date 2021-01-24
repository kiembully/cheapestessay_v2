import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { new_order_form_default } from 'src/app/data/data';
import { Title, Meta } from '@angular/platform-browser';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  providers: [ApiServices, new_order_form_default],
  encapsulation: ViewEncapsulation.None,
})
export class PricingComponent implements OnInit {
  
  constructor(
    private _auth: ApiServices,
    private http: HttpClient,
    private _data: new_order_form_default,
    private titleService: Title,
    private metaTagService: Meta
    ) { }

  order_token = new FormGroup({
    token: new FormControl(this._auth.getOrderToken())
  })
  pricingForm = this._data.setOrders;
  sevenPage:any = [1,2,3,4,5,6,7];

  isPowerPointEnabled:any = false;
  setPowerpoint(val) {
    this.isPowerPointEnabled = (val == 2) ? true : false;
  }
  patchLevel(val) {
    this.pricingForm.patchValue({
      level: val
    })
  }
  patchDeadline(list) {
    this.pricingForm.patchValue({
      deadline: list.deadline,
      duration: list.duration
    })
  }
  deadline_value:any;
  getDeadlineActive(time:any, duration:string) {
    let value:any;
    if (time == 3) {
      value = ((time == 3) && (duration == 'Hours')) ? 0 : 5;
    } else {
      if(time == 6) {value = 1}
      else if(time == 12) {value = 2}
      else if(time == 24) {value = 3}
      else if(time == 48) {value = 4}
      else if(time == 4) {value = 6}
      else if(time == 5) {value = 7}
      else if(time == 7) {value = 8}
      else if(time == 10) {value = 9}
      else if(time == 14) {value = 10}
      else {value = 11}
    }
    return value;
  }


  word_count:any;
  deadlineLable:any;
  price:any;
  setOrders(order_form) {
    localStorage.removeItem('set_order_token');
    this.price = 'Calculating...';
    this._auth.getOrderOptions(order_form).subscribe(
      res => {
        localStorage.setItem('set_order_token', res.data.order_token);
        this.order_token.patchValue({token:res.data.order_token});
        var decoded_output = jwt_decode(res.data.order_token);
        this.word_count = decoded_output.word_count;
        this.deadlineLable = decoded_output.deadlineLable;
        this.price = decoded_output.price_without_discount;
        this.deadline_value = this.getDeadlineActive(decoded_output.deadline, decoded_output.duration);
      }
    )
  }
  isProgressLoading:boolean = false;
  public serviceTypes:any;
  public writerLevels:any;
  public allDeadlines:any;
  displayOrderDetails() {
    this.isProgressLoading = true;
    this._auth.getOrderDetails().subscribe(val => {
      this.serviceTypes = val[0].data;
      this.writerLevels = val[3].data;
      this.allDeadlines = val[6].data;
      this.isProgressLoading = false;
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle("Prices - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Find out relevant prices for writing and editing on Cheapest Essay. Our pay scale depends on service’s type, writer’s level, deadline and pages you need." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "research paper writing service, dissertation writing, resume writing services, professional resume writers, professional proofreading, academic proofreading services, best article writing service, article rewriting service" },
    );

    this.displayOrderDetails();
    this.setOrders(this.pricingForm.value);
    this.pricingForm.valueChanges.subscribe(
      (value:any) => {
        this.setOrders(value);
      }
    )
  }

  incPage() {
    let pageVal = this.pricingForm.value.page;
    pageVal += 1;
    this.patchPageVal(pageVal);
  }
  decPage() {
    let pageVal = this.pricingForm.value.page;
    pageVal = (this.pricingForm.value.page <= 1) ? 1 : pageVal -= 1;
    this.patchPageVal(pageVal);
  }
  patchPageVal(val) {
    this.pricingForm.value.page = val;
    this.pricingForm.patchValue({
      page: val
    })
  }
}
