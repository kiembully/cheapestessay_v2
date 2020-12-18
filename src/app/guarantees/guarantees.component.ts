import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-guarantees',
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GuaranteesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guarantees:any = [
    {
      data: [
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'refund-icon-g',
          title: 'Guarantee 100% Refund',
          link:['Money Back Guarantee','/money-back-guarantee'],},
        {isContentVisible: false, class:'fill-space',},
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'editing-icon-g',
          title: 'Unlimited Free Editing',
          link:['Revision Policy','/revision-policy'],},
        {isContentVisible: false, class:'fill-space',},
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'plagiarism-icon-g',
          title: 'Plagiarism Free',
          link:['We use Turnitin. Read more','/privacy-policy'],},
      ]
    },
    {
      data: [
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'privacy-icon-g',
          title: 'Your Data is 100% Safe',
          link:['Privacy Policy','/privacy-policy']},
        {isContentVisible: false, class:'fill-space',},
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'moneyback-icon-g',
          title: 'On-Time Delivery',
          link:['Money Back Guarantee','/money-back-guarantee']},
        {isContentVisible: false, class:'fill-space',},
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'cheapest-icon-g',
          title: 'Cheapest in the Market',
          link:["Find a lower price within 1 month of ordering, <span>we'll refund you 100%</span>",'/pricing']},
      ]
    },
    {
      data: [
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'suport-icon-g',
          title: 'Support Availble 24/7',
          link:['Chat Now','']},
        {isContentVisible: false, class:'fill-space',},
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'revision-icon-g',
          title: '$10 OFF on Your First Order',
          link:['Ask Support for Coupon - CHAT NOW','']},
        {isContentVisible: false, class:'fill-space',},
        {
          isContentVisible: true,
          class:'spn-contain-guarantee',
          subClass:'quality-icon-g',
          title: 'High Quality Papers',
          link:['Privacy Policy','/privacy-policy']},
      ]
    },
  ]

}
