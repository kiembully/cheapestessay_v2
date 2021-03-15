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
  hasDiscountToken:boolean;
  panelOptionalState:boolean = false;
  plagiarism_cost:any;
  abstract_cost:any;
  email_cost:any;

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
    user_token: new FormControl(''),
    order_id: new FormControl(''),
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
    this.isPageDisabled = (val.additionalextra == 2) ? true : false;
    this.newOrderForm.patchValue({
      page: (val.additionalextra == 2) ? 0 : 1,
      slide: (val != 2) ? this.newOrderForm.value.slide : 1,
    })
  }
  patchLevel(val) {
    if (!this.setAcademicToMaster(this.newOrderForm.value.paper)) {
      this.newOrderForm.patchValue({academic:val})
    }
  }
  isMasterSelected:boolean = false;
  patchPaper(list) {
    this.newOrderForm.patchValue({other_paper: (list.paper_id!=33)?'':null});
    this.orderOutput.patchValue({paper: list.paper_name,})
    if (this.setAcademicToMaster(list.paper_id)) {
      this.newOrderForm.patchValue({academic:2})
    }
  }
  setAcademicToMaster(id) {
    let status = (id === 27 || id === 41 || id === 42 || id === 37) ? true : false;
    return status;
  }
  patchSubject(list) {
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
  patchFormat(id) {
    this.newOrderForm.patchValue({other_format:''})
  }
  patchWriter(val) {
    this.newOrderForm.patchValue({
      writer_id:(val==3)?'W85':'',
    });
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
    this.isProgressLoading = true;
    this.isUserActive = (this._session.isTokenExisting('user_token')) ? false : true;
    this.hasDiscountToken = (this._session.isTokenExisting('discount_token')) ? false : true;
    this.newOrderForm.patchValue({user_token: (this.isUserActive)?localStorage.getItem('user_token'):''})
    this.newOrderForm.patchValue({discount_token: (localStorage.getItem('discount_token') == 'invalid')?'':localStorage.getItem('discount_token')})
    this.displayOldWriters();
    this.displayOrderDetails();
    if (this._session.isTokenExisting('set_order_token')) {
      this.setOrder(this.newOrderForm.value);
    } else {
      let decoded_order_token = jwt_decode(localStorage.getItem('set_order_token'));
      this.iniAdditionalExtras(decoded_order_token);
    }
    this.newOrderForm.valueChanges.subscribe(
      (value:any) => {
        this.setOrder(value);
      }
    )

    this.displayFileUploads()
  }
  
  disableSaving:boolean = false;
  setOrder(order_form) {
    this.total_price = '...';
    this.discounted_price = '...';
    this.disableSaving = true;
    this._auth.getOrderOptions(order_form).subscribe(
      val => {
        console.log(val);
        this.disableSaving = false;
        this.decoded_order_token = jwt_decode(val.data.order_token);
        localStorage.removeItem('set_order_token');
        localStorage.setItem('set_order_token', val.data.order_token);
        this.order_token.patchValue({token:val.data.order_token})
        this.assignValues(this.decoded_order_token);
      }
    )
  }

  deadlineFormat:any = '(Calculating...)';
  page_cost:any;
  slide_cost:any;
  chart_cost:any;
  price_saved:any;
  turnitinPrice:any;
  sendEmailPrice:any;
  abstractPageprice:any;
  in_top10:any;
  word_count:any;
  assignValues(res) {
    this.page_cost = res.pageCost;
    this.slide_cost = res.slideCost;
    this.chart_cost = res.chartCost;
    this.in_top10 = res.in_top10;
    this.word_count = res.word_count;
    this.turnitinPrice = this.filterExtrasIfFree(res.turnitinPrice);
    this.sendEmailPrice = this.filterExtrasIfFree(res.sendEmailPrice);
    this.abstractPageprice = this.filterExtrasIfFree(res.abstractPageprice);
    this.deadline_value = this.getDeadlineActive(res.deadline, res.duration);
    this.deadlineFormat = res.deadlineLable;
    this.isPageDisabled = (res.service == 2) ? true : false;
    this.plagiarism_cost = res.turnitinPrice;
    this.abstract_cost = res.abstractPageprice;
    this.email_cost = res.sendEmailPrice;
    this.total_price = res.price_without_discount;
    this.price_saved = res.price_without_discount - res.totalPrice;
    this.price_saved = Math.round((this.price_saved + Number.EPSILON) * 100) / 100;
  }

  filterExtrasIfFree(val) {
    return (val == 'Free') ? val : '$' + val;
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
  patchAdditionalExtras(val,val2,val3) {
    let arr = [val,val2,val3];
    let extras = ['5','6','7'];
    let value = '';
    for (let index = 0; index < extras.length; index++) {
      if (arr[index]) {
        value += extras[index].toString() + ',';
      }
    }
    return value.slice(0,-1);
  }
  
  iniAdditionalExtras(val) {
    this.isPlagiarismActive = (val.additionalextra.includes(5) || val.additionalextra.includes('5') || val.turnitinPrice == "Free") ? true : false;
    this.isAbstractActive = (val.additionalextra.includes(6) || val.additionalextra.includes('6') || val.abstractPageprice == "Free") ? true : false;
    this.isEmailActive = (val.additionalextra.includes(7) || val.additionalextra.includes('7') || val.sendEmailPrice == "Free") ? true : false;

    this.setOrder(this.setValueOrders(val));
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
      additionalextra: this.patchAdditionalExtras(this.isPlagiarismActive, this.isAbstractActive, this.isEmailActive),
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
      user_token: !this._session.isTokenExisting('user_token')?localStorage.getItem('user_token'):'',
      order_id: (this.isEditing) ? jwt_decode(localStorage.getItem('order_token')).order_id : ''
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

  tooltip:any = [
    "Type of Service - Please select the type of service you need help with. We offer writing from Scratch, Editing and Powerpoint Presentation. If you're not sure of the service, please contact our Customer Support.",
    "Writer Level - Please choose the Writer's level. The level you should choose should match the Academic level you're currently in.",
    "Type of Paper - Please select the most suitable type of paper needed. We offer any academic help from essays to dissertations. If it's not listed here, you may select ''other paper'' then specify the type on the field provided.",
    "Subject - Please choose the subject of your paper. If none of the subjects applies, choose ''Other Subject'' and provide additional information on the field provided.",
    "Timezone - Please choose the Timezone.",
    "Deadline - Please select how soon you need your paper done. It's better to give the writer at least a few additional days before your deadline so that you have the time to read it over and ask for revision if needed.",
    "Number of Pages - One page is approximately 280 words. Bibliography and title page are free of charge, so you do not need to include them in the total number of pages. If your assignment cannot be measured in words/pages (computer programs, etc.) please contact our Customer Support for assistance.",
    "Topic - This is the topic of your paper. It is very important to state your topic clearly now as you cannot change it once the writer starts working on your paper. If you don't have any topic, leave it as Writer's Choice.",
    "Details - Use this area to submit instructions for our team and the writer. Please try to be as detailed as possible. The more info we have about your work, the quicker we can find the best writer for your project and the sooner the writer will catch on. If you have lots of info to submit, just type in the main points.",
    "Upload - You can upload additional instructions, readings, list of sources to be used or any other information. Make sure not to attach any files containing your personal information.",
    "Format - Choose the style for your paper to be formatted in. General format : 280 words per page, legible font (e.g. Arial) 12pt, double-spaced, please select Other if you don't have specific format to be used.&#13;&#13;OR&#13;&#13;Please choose the style for your paper to be formatted in:&#13;&#13;APA (American Psychological Association) is most commonly used to cite sources within the social sciences.&#13;MLA (Modern Language Association) style is most commonly used to write papers and cite sources within the liberal arts and humanities.&#13;Chicago/Turabian style places bibliographic citations at the bottom of a page or at the end of a paper. The Chicago and Turabian styles are most commonly thought of as note systems. Harvard referencing is the preferred style of the British Standards Institution. It is used mostly in the sciences and social sciences.",
    "Discipline - Select English (U.S.) if you are Native English speaker, English (UK) if you speak Bristish English and select Not a Native Speaker if you speak English as your second language.",
    "Preferred Writer - Choose any writer if you  don't have specific writer in mind.  Select Top 10 writers, if you would like one of our best experts to work on your order and Previous writer if you want a particular writer you've worked with before.",
    "Sources - Please specify the exact number of books, journals, articles or any other sources you want the writer to use as references in your paper.",
    "Charts - it is often used to ease understanding of large quantities of data and the relationships between parts of the data. It will help you to convey your ideas in your paper better. $10 for 1 chart.",
    "PowerPoint Slide - Select number of slides of need to present a report. This is a way of attracting audience towards your views and arguments. 1 slide = 50% of the cost per word document.",
    "Turnitin Plagiarism Report - is an Internet-based plagiarism detection service run by the US company Turnitin, LLC",
    "Abstract Page - is a brief summary of the service you avail or any in-depth analysis of a particular subject and is often used to help the reader quickly ascertain the paper's purpose.",
    "Send it to my E-Mail - is an option where you choose to send the output on your email",
  ]
}

