import {FormControl, FormGroup, Validators} from '@angular/forms'

export class new_order_form_default {
    setOrders = new FormGroup({
        service: new FormControl(3),
        page: new FormControl(1),
        set_spacing: new FormControl(1),
        academic: new FormControl(3),
        paper: new FormControl(1),
        other_paper: new FormControl(''),
        subject: new FormControl(18),
        other_subject: new FormControl(''),
        formated_style: new FormControl(1),
        other_format: new FormControl('', [Validators.required]),
        source: new FormControl(0),
        discipline: new FormControl(2),
        topic: new FormControl("Writer's Choice", [Validators.required]),
        add_detail: new FormControl('', [Validators.required]),
        timezone: new FormControl('America/Chicago'),
        deadline: new FormControl(19),
        deadlineid: new FormControl(83),
        duration: new FormControl('Days'),
        slide: new FormControl(0),
        chart: new FormControl(0),
        preferred_writer: new FormControl('any_writer'),
        writer_id: new FormControl(''),
        additionalextra: new FormControl(''),
        order_token: new FormControl(''),
        user_token: new FormControl(''),
        discount_token: new FormControl('')
    })
    retrieveOrder = new FormGroup({
      academic: new FormControl(3),
      add_detail: new FormControl(""),
      additionalextra: new FormControl(""),
      chart: new FormControl(0),
      chartCost: new FormControl("10.00"),
      chartTotal: new FormControl(0),
      deadline: new FormControl(3),
      deadlineLable: new FormControl("Fri, Oct 16th, 2020 at 8:33 AM"),
      discipline: new FormControl(2),
      duration: new FormControl("Days"),
      formated_style: new FormControl(1),
      iat: new FormControl(1602595998),
      life_time_Disc: new FormControl(0),
      other_format: new FormControl(""),
      other_paper: new FormControl(""),
      other_subject: new FormControl(""),
      page: new FormControl(1),
      pageCost: new FormControl("14.95"),
      pageTotal: new FormControl("14.95"),
      paper: new FormControl(1),
      preferred_writer: new FormControl("any_writer"),
      price: new FormControl("14.95"),
      price_without_discount: new FormControl("14.95"),
      service: new FormControl(3),
      set_spacing: new FormControl(1),
      slide: new FormControl(0),
      slideCost: new FormControl("7.48"),
      slideTotal: new FormControl("0.00"),
      source: new FormControl(0),
      subject: new FormControl(18),
      timezone: new FormControl("America/Chicago"),
      topic: new FormControl("Writer's Choice"),
      totalPrice: new FormControl("14.95"),
      word_count: new FormControl(280),
      writerAssignCostPerPage: new FormControl("14.95"),
      writer_id: new FormControl(""),
    })
    applyDiscount = new FormGroup({
      order_token: new FormControl(''),
      coupon_code: new FormControl('NWSLTTR15%'),
      user_token: new FormControl(''),
    })
    orderOutput = new FormGroup({
      paper: new FormControl('Essay (Any Type)'),
      subject: new FormControl('English'),
    })
}

export class profile_form_default {
  levelForm = new FormGroup({
    lifetime_discount_id: new FormControl(),
    lifetime_discount_name: new FormControl(),
    min_requiremen: new FormControl(),
  })
  nameForm = new FormGroup({
    user_token: new FormControl(),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  })
  passwordForm = new FormGroup({
    current_password: new FormControl(),
    new_password: new FormControl(),
    retype_password: new FormControl(),
    user_token: new FormControl(),
  })
  emailForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    user_token: new FormControl(),
  })
  mobileForm = new FormGroup({
    telephone: new FormControl(),
    prefix: new FormControl(),
    user_token: new FormControl()
  })
  whatsAppForm = new FormGroup({
    whatsapp_num: new FormControl(),
    user_token: new FormControl(),
  })
  addressForm = new FormGroup({
    street: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipcode: new FormControl(),
    countrycode: new FormControl(),
    country: new FormControl(),
    user_token: new FormControl(),
  })
}

export class service_object {
  service: any = [
    {name:'essay-writing-services', id:1},
    {name:'research-paper-writing-services', id:3},
    {name:'coursework-writing-services', id:25},
    {name:'case-study-writing', id:8},
    {name:'write-my-essay', id:1},
    {name:'research-article-summary', id:35},
    {name:'assignment-writing-service', id:68},
    {name:'math-homework-help', id:121},
    {name:'book-movie-review-services', id:6},
    {name:'lab-report-abstract', id:37},
    {name:'powerpoint-presentation-service', id:30},
    {name:'admission-essay', id:31},
    {name:'professional-cover-letter-writing-services', id:3},
    {name:'cv-writing-services', id:104},
    {name:'cv-editing-services', id:104},
    {name:'article-writing-services', id:17},
    {name:'report-writing-service', id:29},
    {name:'thesis-writing-services', id:42},
    {name:'dissertation-help', id:27},
    {name:'writing-an-essay-outline', id:104},
    {name:'blog-writers-for-hire', id:104},
    {name:'speech-writing-services', id:12},
    {name:'article-critique-writing-services', id:17},
    {name:'writing-a-reaction-paper', id:17},
    {name:'professional-dissertation-proposal', id:27},
    {name:'business-simulation-report-online', id:27},
    {name:'write-my-personal-statement', id:27},
    {name:'document-formatting-services', id:27},
    {name:'programming-assignment-help', id:68},
    {name:'professional-resume-editing', id:68},
    {name:'resume-writing-services', id:104},
    {name:'rewriting-services', id:104},
    {name:'best-paraphrasing-website', id:104},
    {name:'writing-a-marketing-plan', id:104},
    {name:'financial-statement-analysis', id:104},
    {name:'swot-analysis-of-business', id:104},
    {name:'short-story-writers', id:104},
    {name:'assignment-writing-service', id:68},
  ]

  services:any = [
    {
      set:[
        {service:'Essay Writing Services',link:'essay-writing-services'},
        {service:'Article Writing Services',link:'article-writing-services'},
        {service:'Research Paper Writing Service',link:'research-paper-writing-services'},
        {service:'Report Writing Services',link:'report-writing-service'},
        {service:'Coursework Writing Service',link:'coursework-writing-services'},
      ]
    },
    {
      set:[
        {service:'Write my lab report',link:'lab-report-abstract'},
        {service:'Speech Writing Services',link:'speech-writing-services'},
        {service:'Writing a Critique',link:'article-critique-writing-services'},
        {service:'Writing A Reaction Paper',link:'writing-a-reaction-paper'},
        {service:'Professional Dissertation Writers',link:'professional-dissertation-proposal'},
      ]
    },
    {
      set:[
        {service:'Mind Map Service',link:'mind-map-service'},
        {service:'Business Simulation Report online',link:'business-simulation-report-online'},
        {service:'Write My Personal Statement',link:'write-my-personal-statement'},
        {service:'Document Formatting Services',link:'document-formatting-services'},
        {service:'Programming Assignment',link:'programming-assignment-help'},
      ]
    },
    {
      set:[
        {service:'Professional Resume Writers',link:'professional-resume-editing'},
        {service:'Resume Editing Services',link:'resume-writing-services'},
        {service:'Online Article Rewriter',link:'rewriting-services'},
        {service:'Best Paraphrasing Website',link:'best-paraphrasing-website'},
        {service:'Professional Poster Maker',link:'professional-poster-maker'},
      ]
    },
    {
      set:[
        {service:'Writing a Marketing Plan',link:'writing-a-marketing-plan'},
        {service:'Financial Statement Analysis',link:'financial-statement-analysis'},
        {service:'SWOT Analysis of a Business',link:'swot-analysis-of-business'},
        {service:'Professional Short Story Writers',link:'short-story-writers'},
        {service:'Assignment Writing Service',link:'assignment-writing-service'},
      ]
    },
  ]
}