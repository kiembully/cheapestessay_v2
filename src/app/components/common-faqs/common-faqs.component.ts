import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-faqs',
  templateUrl: './common-faqs.component.html',
  styleUrls: ['./common-faqs.component.css']
})
export class CommonFaqsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faqIndexExpanded: number = -1;

  faq_home_content:any = [
    {
      header: 'What is CheapestEssay.com?',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      header: 'Are online writing services safe?',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      header: 'How much does an Essay Writer Cost?',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      header: 'Is CheapestEssay plagiarism free?',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      header: 'Can you write my paper?',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ]

}
