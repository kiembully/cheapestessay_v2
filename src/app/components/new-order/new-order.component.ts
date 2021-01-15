import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { new_order_form_default } from '../../data/data';
import { loggedin_session } from '../../data/ui-services';
import {MatDialog} from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import { DialogTriggers } from 'src/app/data/ui-services';
 // @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
  providers: [ApiServices, new_order_form_default, loggedin_session, DialogTriggers],
  encapsulation: ViewEncapsulation.None,
})
export class NewOrderComponent implements OnInit {
  @Input() public isEditing: boolean;

  // default values
  newOrderForm:any = this._data.setOrders;
  decoded_order_token: any;
  total_price: any;
  discounted_price: any;
  deadline_value: any;
  isAbstractActive:boolean;
  isPlagiarismActive:boolean;
  isEmailActive:boolean;
  isUserActive:boolean;

  // order ouput on floating element
  orderOutput:any = this._data.orderOutput;

  user_token = new FormGroup({
    user_token: new FormControl(this._auth.getToken()),
  })
  order_token = new FormGroup({
    token: new FormControl(this._auth.getOrderToken())
  })
  couponForm = new FormGroup({
    user_token: new FormControl(''),
    coupon_code: new FormControl(''),
    order_token: new FormControl(''),
  })
  frmDeleteMaterial = new FormGroup({
    file_name: new FormControl(''),
    uploaded_token: new FormControl(''),
    user_token: new FormControl('')
  })

  constructor(
    private _auth: ApiServices,
    private _data: new_order_form_default,
    public _session: loggedin_session,
    public dialog: MatDialog,
    public _dialog_trigger: DialogTriggers
    ) {
  }

  tokenForm = new FormGroup({
    user_token: new FormControl(this._auth.getToken()),
  })

  isPageDisabled:boolean = false;
  patchPageSlide(val) {
    this.isPageDisabled = (val == 2) ? true : false;
    this.newOrderForm.patchValue({
      page: (val == 2) ? 0 : 1,
      slide: (val != 2) ? this.newOrderForm.value.slide : 1,
    })
  }
  patchLevel(val) {
    this.newOrderForm.patchValue({academic:val})
  }
  isOtherPaper:boolean = false;
  patchPaper(list) {
    this.isOtherPaper = (list.paper_id!=33) ? false : true;
    this.newOrderForm.patchValue({other_paper: (list.paper_id!=33)?'':null});
    this.orderOutput.patchValue({paper: list.paper_name,})
  }
  isOtherSubject:boolean = false;
  patchSubject(list) {
    this.isOtherSubject = (list.id!=49) ? false : true;
    this.newOrderForm.patchValue({other_subject: (list.id!=49)?'':null});
    this.orderOutput.patchValue({subject: list.subject_name,})
  }
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
  patchDeadline(list) {
    this.newOrderForm.patchValue({
      deadline: list.deadline,
      duration: list.duration
    })
  }
  word_tot:any = 560;
  patchSpacing(val) {
    this.word_tot = (val > 1) ? 280 : 560;
  }
  isOtherFormatVisible: boolean = false;
  patchFormat(id) {
    this.isOtherFormatVisible = (id == 5) ? true : false;
    this.newOrderForm.patchValue({other_format:''})
  }
  isPreferredWriterVisible: boolean = false;
  patchWriter(val) {
    let writer;
    if (val == 1) {
      writer = 'any_writer'
    } else if (val == 2) {
      writer = 'top_10_writer'
    } else {
      writer = 'my_previous_writer'
    }
    this.newOrderForm.patchValue({
      writer_id:(val==3)?'W85':'',
    });
    this.isPreferredWriterVisible = (val == 3) ? true : false;
  }
  patchPreferredWriter(val) {
    this.newOrderForm.patchValue({writer_id: val})
  }

  isProgressLoading:boolean = false;
  // Display order details api
  public serviceTypes:any;
  public paperTypes:any;
  public pPaperTypes:any;
  public oPaperTypes:any;
  public writerLevels:any;
  public pSubjects:any;
  public oSubjects:any;
  public allDeadlines:any;
  public formatStyles:any;
  public allDiscipline:any;
  public topWriters:any;
  public otherWriters:any;
  public timezones:any;
  public addExtras:any;
  displayOrderDetails() {
    this.isProgressLoading = true;
    this._auth.getOrderDetails().subscribe(val => {
      this.serviceTypes = val[0].data;
      this.pPaperTypes = val[1].data;
      this.oPaperTypes = val[2].data;
      this.writerLevels = val[3].data;
      this.pSubjects = val[4].data;
      this.oSubjects = val[5].data;
      this.allDeadlines = val[6].data;
      this.formatStyles = val[7].data;
      this.allDiscipline = val[8].data;
      this.topWriters = val[9].data;
      this.otherWriters = val[10].data;
      this.timezones = val[11].data;
      this.addExtras = val[12].data
      
      this.isProgressLoading = false;
    });
  }

  public oldWriters:any;
  displayOldWriters() {
    this._auth.getOldWriters(this.tokenForm.value).subscribe(
      res => {
        this.oldWriters = res.data
      }
    )
  }

  order_data:any;
  ngOnInit(): void {
    this.isUserActive = (this._session.isTokenExisting('user_token')) ? false : true;
    this.displayOldWriters();
    this.displayOrderDetails();
    if (this._session.isTokenExisting('set_order_token')) {
      this.setOrder(this.newOrderForm.value);
    } else {
      let decoded_order_token = jwt_decode(localStorage.getItem('set_order_token'));
      this.iniAdditionalExtras(decoded_order_token.additionalextra);
      this.setOrder(this.setValueOrders(decoded_order_token));
    }
    this.newOrderForm.valueChanges.subscribe(
      (value:any) => {
        this.setOrder(value);
      }
    )

    this.displayFileUploads()
  }
  
  setOrder(order_form) {
    this.total_price = '...';
    this.discounted_price = '...';
    this._auth.getOrderOptions(order_form).subscribe(
      val => {
        this.decoded_order_token = jwt_decode(val.data.order_token);
        localStorage.removeItem('set_order_token');
        localStorage.setItem('set_order_token', val.data.order_token);
        this.order_token.patchValue({token:val.data.order_token})
        this.patchCoupon(val.data.order_token);
        this.assignValues(this.decoded_order_token);
      }
    )
  }
  
  getCouponValue(price) {
    this._auth.getCouponCode(this.couponForm.value).subscribe(
      res=> {
        localStorage.setItem('discount_token', res.data.discount_token);
        let decoded_discount_token = jwt_decode(localStorage.getItem('discount_token'));
        this.total_price = price - (price * (decoded_discount_token.coupon_discount/100));
        this.price_saved = price - this.total_price;
        this.total_price = Math.round((this.total_price + Number.EPSILON) * 100) / 100;
        this.price_saved = Math.round((this.price_saved + Number.EPSILON) * 100) / 100;
      }
    )
  }

  deadlineFormat:any = '(Calculating...)';
  page_cost:any;
  slide_cost:any;
  chart_cost:any;
  price_saved:any;
  assignValues(res) {
    this.page_cost = res.pageCost;
    this.slide_cost = res.slideCost;
    this.chart_cost = res.chartCost;
    this.deadline_value = this.getDeadlineActive(res.deadline, res.duration);
    this.deadlineFormat = res.deadlineLable;
    this.isPageDisabled = (res.service == 2) ? true : false;
    if (localStorage.getItem('discount_token') == null || localStorage.getItem('discount_token') == 'invalid') {
      this.total_price = res.price;
      this.total_price = this.total_price.replace('$', '');
    } else {
      this.getCouponValue(res.price_without_discount);
    }
  }

  // increase and decrease of total page, charts, sources and powerpoint slides
  decPage() {
    let total_page = this.newOrderForm.value.page;
    total_page = (total_page>1) ? total_page -= 1 : total_page = 1;
    this.newOrderForm.patchValue({page:total_page})
  }
  incPage() {
    let total_page = this.newOrderForm.value.page;
    total_page += 1;
    this.newOrderForm.patchValue({page:total_page})
  }
  
  decSource() {
    let tot_Source = this.newOrderForm.value.source;
    tot_Source = (tot_Source>0) ? tot_Source -= 1 : tot_Source = 0;
    this.newOrderForm.patchValue({source:tot_Source});
  }
  incSource() {
    let tot_Source = this.newOrderForm.value.source;
    tot_Source += 1;
    this.newOrderForm.patchValue({source:tot_Source});
  }
  decCharts() {
    let tot_Charts = this.newOrderForm.value.chart;
    tot_Charts = (tot_Charts>0) ? tot_Charts -= 1 : tot_Charts = 0;
    this.newOrderForm.patchValue({chart:tot_Charts})
  }
  incCharts() {
    let tot_Charts = this.newOrderForm.value.chart;
    tot_Charts += 1;
    this.newOrderForm.patchValue({chart:tot_Charts})
  }
  decSlides() {
    let tot_Slides = this.newOrderForm.value.slide;
    tot_Slides = (tot_Slides>0) ? tot_Slides -= 1 : tot_Slides = 0;
    this.newOrderForm.patchValue({slide:tot_Slides})
  }
  incSlides() {
    let tot_Slides = this.newOrderForm.value.slide;
    tot_Slides += 1;
    this.newOrderForm.patchValue({slide:tot_Slides})
  }

  // custom single radio button value initialization and toggle function
  toggleExtras(id) {
    switch(id) {
      case 5: {
        this.isPlagiarismActive = !(this.isPlagiarismActive);
        break;
      } case 6: {
        this.isAbstractActive = !(this.isAbstractActive);
        break;
      } default: {
        this.isEmailActive = !(this.isEmailActive);
        break;
      }
    }
    this.patchExtras(this.isPlagiarismActive, this.isAbstractActive, this.isEmailActive);
  }
  patchExtras(val,val2,val3) {
    let arr = [val,val2,val3];
    let extras = ['5','6','7'];
    let value = '';
    for (let index = 0; index < extras.length; index++) {
      if (arr[index]) {
        value += extras[index].toString() + ',';
      }
    }
    this.newOrderForm.patchValue({
      additionalextra: value.slice(0,-1),
    })
  }
  iniAdditionalExtras(val) {
    let val_length = val.lenth > 0;
    this.isPlagiarismActive = (val == '6,7' || val == '6' || val == '7' || val == '' || val_length) ? false : true;
    this.isAbstractActive = (val == '5,7' || val == '5' || val == '7' || val == '' || val_length) ? false : true;
    this.isEmailActive = (val == '5,6' || val == '6' || val == '5' || val == '' || val_length) ? false : true;
  }
  setValueOrders(res) {
    this.newOrderForm.patchValue({
      service: res.service,
      page: res.page,
      set_spacing: res.set_spacing,
      academic: res.academic,
      paper: res.paper,
      other_paper: res.other_paper,
      subject: res.subject,
      other_subject: res.other_subject,
      formated_style: res.formated_style,
      other_format: res.other_format,
      source: res.source,
      discipline: res.discipline,
      topic: res.topic,
      add_detail: res.add_detail,
      timezone: res.timezone,
      deadline: res.deadline,
      duration: res.duration,
      slide: res.slide,
      chart: res.chart,
      preferred_writer: res.preferred_writer,
      writer_id: res.writer_id,
      additionalextra: (res.additionalextra.constructor === Array) ? ((res.additionalextra.length > 0) ? res.additionalextra : '') : res.additionalextra,
    })
    return this.newOrderForm.value
  }
  patchCoupon(o_token) {
    let coupon_code = localStorage.getItem('discount_token');
    this.couponForm.patchValue({
      user_token: (localStorage.getItem('user_token') == null) ? '' : localStorage.getItem('user_token'),
      order_token: o_token,
      coupon_code: ((coupon_code == null || coupon_code == 'invalid') ? '' : jwt_decode(coupon_code).coupon_code)
    })
  }

  // open coupon dialog 
  openCouponDialog() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '375px',
      width: '600px',
      backdropClass: 'common-dialog',
      panelClass: 'panel-dialog',
      data: {
        // displays user-coupon component
        content_id: 1,
        coupon_id: this.coupon_state
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newOrderForm.patchValue({
        discount_token: localStorage.getItem('discount_token')
      })
      this.setOrder(this.newOrderForm.value);
    });
  }

  coupon_state:any;
  getCouponState() {
    let discount_token = localStorage.getItem('discount_token');
    let is_user_active = !this._session.isTokenExisting('user_token');
    if (is_user_active) {
      if (discount_token == 'invalid') {
        this.coupon_state = 1;
        return 'Coupon Code was not Applied. (?)'
      }
    } else {
      if (discount_token == null) {
        this.coupon_state = 0;
        return 'Apply First time Coupon?'
      }
    }
  }

  fileQueue:any;
  displayFileUploads() {
    if (!(this._session.isTokenExisting('uploaded_token'))) {
      let decoded_token = jwt_decode(localStorage.getItem('uploaded_token'));
      this.fileQueue = decoded_token;
    }
  }
  deleteFile(name) {
    this.isProgressLoading = true;
    this.frmDeleteMaterial.patchValue({
      file_name: name,
      uploaded_token: localStorage.getItem('uploaded_token'),
      user_token: !this._session.isTokenExisting('user_token')?localStorage.getItem('user_token'):''
    })
    
    this._auth.deleteFiles(this.frmDeleteMaterial.value).subscribe(
      res => {
        this.isProgressLoading = false;
        if (res.status) {
          localStorage.removeItem('uploaded_token');
          if (res.data !== undefined) {
            localStorage.setItem('uploaded_token', res.data.uploaded_token);
            this.fileQueue = jwt_decode(res.data.uploaded_token)
          }
        }
      }
    )
  }

  getOrderId() {
    let order_id = (this.isEditing) ? jwt_decode(localStorage.getItem('order_token')).order_id : 0;
    return order_id;
  }
}