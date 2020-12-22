import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-subpages-header',
  templateUrl: './common-subpages-header.component.html',
  styleUrls: ['./common-subpages-header.component.css']
})
export class CommonSubpagesHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public data_index:string;

  header_content:any = [
    {
      header: 'Order an Essay at Cheapest Essay',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'Cheapest Essay Guarantees',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'Cheapest Essay Money Back Guarantee',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: "Cheapest Essay's Pricing",
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'About Cheapest Essay',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'Cheapest Essay Revision Policy',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'Cheapest Essay Privacy Policy',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'Cheapest Essay Terms of Use',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'Cheapest Essay FAQs',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'Contact To Cheapest Essay',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
  ]

}
