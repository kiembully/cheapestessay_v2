import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-common-guarantees',
  templateUrl: './common-guarantees.component.html',
  styleUrls: ['./common-guarantees.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonGuaranteesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guaranteesOption: OwlOptions = {
    loop: true,
    dots: false,
    margin: 13,
    nav: false,
    center:false,
    responsive:{
      0:{
        items:1,
        dots: true,
        center:true,  
      },
      576:{
        items:2,
        dots: true,
        center:true,  
      },
      768:{
          items:3,
          dots: true,
          center:true,
      }
    }
  }

  guaranteeContent:any = [
    {class: 'refund-icon', title: 'Guarantee 100% Refund', link:['Read more','/money-back-guarantee']},
    {class: 'plagiarism-icon', title: 'Plagiarism Free', link:['Read more','/privacy-policy']},
    {class: 'cheapest-icon', title: 'Cheapest in the Market', link:['Read more','/pricing']},
    {class: 'suport-icon', title: 'Support Availble 24/7', link:['Chat Now','']},
    {class: 'revision-icon', title: 'Always Free Revision', link:['Read more','/revision-policy']},
    {class: 'availability-icon', title: 'Always on Time', link:['decoy','decoy']},
  ]

}
