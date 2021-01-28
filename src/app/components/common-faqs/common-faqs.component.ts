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
      header: 'How does CheapestEssay.com work?',
      content: [
        'Ordering a paper with CheapestEssay.com is very easy. All you need to do is to fill in the basic order form, proceed with the payment and wait for your assignment to be completed within the deadline you choose.',
        'If you are sure you can provide specific paper instructions or upload any of the required materials, you can start our ordering process by filling in the order form.'
      ],
      list: [
        'You fill in the order form and proceed with the payment.',
        'Personal writer is assigned to your order.',
        'Your paper is completed and delivered to your personal email address.'
      ]
    },
    {
      header: 'Is it legal to use your service?',
      content: "Of course, it is legal! We are a registered U.S corporation and conform to all of the laws for corporations within the United States. As well, you have the right to purchase any legal product or service, and purchasing original writing paper is completely legal!",
    },
    {
      header: 'How much does an Essay Writer Cost?',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      header: 'Is CheapestEssay plagiarism free?',
      content: "We check each order with our advanced anti-plagiarism software to ensure that your paper is 100% original. With our commitment to quality and zero tolerance policy for plagiarism, you can relax knowing we will meet your needs.",
    },
    {
      header: 'Who will write my paper?',
      content: "You can notify us if you want to choose your own writer, or put the writers id number directly on the sign up form. Just remember that all our writers are experts in their respective fields. They have been hand-picked by our Quality Assurance Department and have years of writing experience.",
    },
  ]

}
