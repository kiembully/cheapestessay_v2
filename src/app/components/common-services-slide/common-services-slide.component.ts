import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-common-services-slide',
  templateUrl: './common-services-slide.component.html',
  styleUrls: ['./common-services-slide.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonServicesSlideComponent implements OnInit {

  constructor() { }

  @Input() public isWriters: any;

  servicesOption: OwlOptions = {
    loop: true,
    dots: false,
    margin: 13,
    nav: false,
    center:false,
    responsive:{
      0:{
          items:2,
          dots: true,
          center:true,
      },
      768:{
          items:2,
          dots: true,
          center:true,
      },
      992:{
          center:false,
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
        {service:'Essay Writing Services',link:''},
        {service:'Article Writing Services',link:''},
        {service:'Research Paper Writing Service',link:''},
        {service:'Coursework Writing Service',link:''},
        {service:'Dissertation Writing Services',link:''},
      ]
    },
    {
      set:[
        {service:'Write my lab report',link:''},
        {service:'Speech Writing Services',link:''},
        {service:'Writing a Critique',link:''},
        {service:'Writing a Reaction Paper',link:''},
        {service:'Capstone Project Ideas',link:''},
      ]
    },
    {
      set:[
        {service:'Write my lab report',link:''},
        {service:'Speech Writing Services',link:''},
        {service:'Writing a Critique',link:''},
        {service:'Writing a Reaction Paper',link:''},
        {service:'Capstone Project Ideas',link:''},
      ]
    },
    {
      set:[
        {service:'Write my lab report',link:''},
        {service:'Speech Writing Services',link:''},
        {service:'Writing a Critique',link:''},
        {service:'Writing a Reaction Paper',link:''},
        {service:'Capstone Project Ideas',link:''},
      ]
    },
    {
      set:[
        {service:'Write my lab report',link:''},
        {service:'Speech Writing Services',link:''},
        {service:'Writing a Critique',link:''},
        {service:'Writing a Reaction Paper',link:''},
        {service:'Capstone Project Ideas',link:''},
      ]
    },
  ]

  getServicesContentData(param) {
    let data_id = (param) ? 0 : 1;
    return data_id;
  }

  ngOnInit(): void {
  }

}
