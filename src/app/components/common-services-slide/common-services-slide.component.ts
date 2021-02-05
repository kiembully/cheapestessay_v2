import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FormControl, FormGroup} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-services-slide',
  templateUrl: './common-services-slide.component.html',
  styleUrls: ['./common-services-slide.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonServicesSlideComponent implements OnInit {

  constructor(
    private _auth: ApiServices,
    private _snackBar: MatSnackBar,
    private router: Router,
    public route: ActivatedRoute,) { }

  @Input() public isWriters: any;

  servicesOption: OwlOptions = {
    loop: false,
    dots: true,
    margin: 10,
    nav: false,
    center:false,
    responsive:{
      0:{
          items:1,
          dots: true,
          center: true,
          loop: true
      },
      576:{
          items:1,
          dots: true,
          center: true,
          loop: true
      },
      768:{
          items:2,
          dots: true,
          loop: true
      },
      992: {
        items:2,
      }
    }
  }

  servicesContent:any = [
    {
      data: [
        {class: 'writer1_icon', title: 'W85', orders: '1,662', action:'HIRE NOW'},
        {class: 'writer2_icon', title: 'W16', orders: '1,604', action:'HIRE NOW'},
        {class: 'writer3_icon', title: 'W161', orders: '1,594', action:'HIRE NOW'},
        {class: 'writer4_icon', title: 'W23', orders: '1,575', action:'HIRE NOW'},
        {class: 'writer5_icon', title: 'W22', orders: '1,534', action:'HIRE NOW'},
        {class: 'writer6_icon', title: 'w31', orders: '1,310', action:'HIRE NOW'},
        {class: 'writer7_icon', title: 'W5', orders: '1,188', action:'HIRE NOW'},
        {class: 'writer8_icon', title: 'W80', orders: '1,111', action:'HIRE NOW'},
        {class: 'writer9_icon', title: 'W140', orders: '1,044', action:'HIRE NOW'},
        {class: 'writer10_icon', title: 'W61', orders: '1,002', action:'HIRE NOW'},
      ]
    },
    {
      data: [
        {class:"", title: 'Essay (Any Type)', orders: '36,466', action: 'ORDER NOW'},
        {class:"", title: 'Research Paper', orders: '5,092', action: 'ORDER NOW'},
        {class:"", title: 'Report', orders: '1,523', action: 'ORDER NOW'},
        {class:"", title: 'Case Study', orders: '1,749', action: 'ORDER NOW'},
        {class:"", title: 'Assignment', orders: '2,840', action: 'ORDER NOW'},
        {class:"", title: 'Argumentative Essay', orders: '1,677', action: 'ORDER NOW'},
        {class:"", title: 'Summary', orders: '1,301', action: 'ORDER NOW'},
        {class:"", title: 'Coursework', orders: '1,482', action: 'ORDER NOW'},
        {class:"", title: 'Critical Thinking', orders: '1,074', action: 'ORDER NOW'},
        {class:"", title: 'PowerPoint Presentation', orders: '1,074', action: 'ORDER NOW'},
      ]
    }
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
        {service:'Write my lab report',link:'lab-report'},
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

  getServicesContentData(param) {
    let data_id = (param) ? 0 : 1;
    return data_id;
  }

  isProgressLoading: boolean = false;
  frmContact = new FormGroup({
    name: new FormControl('User'),
    email: new FormControl(''),
    message: new FormControl('This message was submitted thru Contact Us section.')
  })
  ngOnInit(): void {
  }

  
  messagePositionH: MatSnackBarHorizontalPosition = 'center';
  messagePositionV: MatSnackBarVerticalPosition = 'bottom';
  submitEmail() {
    this.isProgressLoading = true;
    this._auth.getContactDetails(this.frmContact.value).subscribe(
      res => {
        this.isProgressLoading = false;
        this._snackBar.open(res.message, 'OK', {
          duration: 3000,
          horizontalPosition: this.messagePositionH,
          verticalPosition: this.messagePositionV,
        })
      }
    )
  }

  toServices(id) {
    this.router.navigate(['',id])
  }

}
