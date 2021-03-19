import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-content-photo-info',
  templateUrl: './content-photo-info.component.html',
  styleUrls: ['./content-photo-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentPhotoInfoComponent implements OnInit {

  @Input() public left_first: boolean;
  @Input() public data_content: any;
  @Input() public has_header: boolean = false;
  @Input() public has_order_button: boolean = false;
  @Input() public has_contact_button: boolean = false;
  @Input() public has_diagonal_background: boolean = false;
  @Input() public has_background_content: boolean = false;
  @Input() public is_faqs_content: boolean = false;
  @Input() public is_disclaimer_content: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  getArrayValue(content) {
    let value: any;
    if (content == 'about_services') {
      value = this.about_services;
    } else if (content == 'pay_first_services') {
      value = this.pay_first_services;
    } else if (content == 'money_back_guarantee') {
      value = this.money_back_guarantee;
    } else if (content == 'how_to_do') {
      value = this.how_to_do
    } else if (content == 'place_an_order') {
      value = this.place_an_order
    } else if (content == 'make_a_payment') {
      value = this.make_a_payment
    } else if (content == 'order_in_progress') {
      value = this.order_in_progress
    } else if (content == 'receive_your_paper') {
      value = this.receive_your_paper
    } else if (content == 'about_us_contents') {
      value = this.about_us_contents
    } else if (content == 'revision_policy') {
      value = this.revision_policy
    } else if (content == 'faqs_content_data') {
      value = this.faqs_content_data
    } else if (content == 'ask_question_content') {
      value = this.ask_question_content
    } else if (content == 'contact_us_content') {
      value = this.contact_us_content
    } else if (content == 'disclaimer_content') {
      value = this.disclaimer_content;
    } return value;
  }

  getInitialRow(content) {
    let value: number = 0;
    if (content) {
      value = 1
    } else {
      value = 0
    }
    return value
  }

  about_services:any[] = [
    {
      title: 'Professional Service for any Occasion',
      contents: [
        "No more worries about your academic needs as Cheapest Essay has got you covered. Whether you are busy preparing for exams, part-time work, or trapped with other commitments, we are always available to help you with your assignment. Having more than 500 writers registered with us, we ensure to offer the best-in-class essay writing services to students across the globe. Students from high school to college and from students pursuing their master's degree to doctorate levels, we offer superior writing services across various subjects to all levels of candidates.",
        "So, no matter what level of paper you need, we can assist. Research work, essays, book reviews, case studies, article writing, etc., are some of the significant services we offer. All the writers registered with us have the expertise to work on various subjects. Once you place your order, a writer who owes experience in that subject will be assigned to start working on it. We ensure to employ such authors who have proficiency in various topics.",
      ],
      cta: 'Write My Paper',
      class: 'about-service-sprite1',
    },
    {
      title: 'What Differentiates our Essay Writing Services from Others',
      contents: [
        "We ensure to offer superior quality yet economical essay services that are sure to exceed your expectations. Whether you are looking for descriptive, narrative, expository, or persuasive essays, we have got you covered.",
        "Our team comprises top professional writers across the globe who have years of experience in this arena and hold advanced degrees in science, literature, and many others. Thus, they can meet all essay requirements and help you improve and support your theme or proposition."
      ],
      cta: 'Hire an Essay Writer Today',
      class: 'about-service-sprite2'
    },
    {
      title:'What Type of Academic Paper We Cover',
      contents:[
        "<strong>Research papers</strong>: Coming up with an impressive research paper is a nerve-wracking process as it requires you to do thorough research. You no longer need to take stress as we have got your back. Cheapest Essay has retained the best research writing professionals, and some of them are Ph.D. holders, so rest assured to get high-quality research.",
        "<strong>Coursework</strong>: We know how hard it gets to transform your reading into a well-curated piece of writing. That’s why we are here. We help you create a well-structured part of coursework no matter what you require. Now there is no need to worry about your low grades as we help you get the grades you desire.",
        "<strong>Thesis/dissertation proposal</strong>: Are you finding it challenging to work on a thesis or have an idea but lack the expertise to put them into your words? No worries: No matter what level you need to develop a thesis/dissertation proposal, we got you covered.",
        "<strong>Assignment</strong>: Having the expertise of writing any assignment in any discipline, we can meet all the requirements. You can take a sigh of relief when you know that you can hand over your assignment burden on us.",
      ],
      cta: 'Buy Paper Now',
      class:'about-service-sprite3'
    },
    {
      title:'What Type of Report Writing Services We Can Help With',
      contents:[
        "No matter if you are looking for a business report, lab report, or financial ratio analysis, we help it attain the professionalism it requires.",
        "<strong>Lab report</strong>: It is one-of-a-kind technical writing that requires you to describe your experiment in detail. So, if you are holding back that report due to a lack of knowledge of the correct writing format, Cheapest Essay is at your rescue. Our qualified researchers work on your lab report and ensure no errors in creating the perfect piece.",
        "<strong>Book/Movie Report And Review</strong>: Now, there is no need to spend sleepless nights reading books from start to end and watching movies to write captivating reviews. All you need to do is fill in your requirements and leave the rest on us. Our professional writers are here to help you with the most tedious task.",
        "<strong>Any report</strong>: Our professional writers in the report writing sector have all that it takes to give you the best report. They are knowledgeable, investigative, and able to document both the statistical/experimental data. So, they can assist any student at a master’s degree level, undergraduate or graduate.",
      ],
      cta: 'Place your Report Request Today!',
      class:'about-service-sprite4'
    },
    {
      title: 'What Article Needs We Cater',
      contents:[
        "Cheapest Essay is the go-to option for all your article requirements. Always get the best content you desire. Our platform has verified and trustworthy article writers worldwide who have the expertise to write articles that help you get good grades in your academics. Whether you want a complex or a simple write-up, we have flexible solutions for all your needs.",
        "<strong>Article Critique</strong>: When you are busy with other prior work or confused about working on an article critique, hire professional services. We will be more than happy to assist you. We have the needed skills and knowledge to write out of the box good article critique to help you get good grades and excel in your academics."
      ],
      cta: 'Order a Paper',
      class:'about-service-sprite5'
    }
  ]

  pay_first_services:any[] = [
    {
      title: 'Deadline and the Number of Pages',
      contents:[
        "We are very strict on deadlines as every customer is important to us. However, your pricing depends on the deadline you set. If your requirement is urgent and you have selected a very short deadline such as 3 hours, you may need to pay more.",
        "Similar is the case with the number of pages. It is equally proportional to the number of words. So, the more is the number of pages; the more is the price. "
      ],
      cta: 'Get Free Quote',
      class:'pay-first-img1'
    },
    {
      title: "Type of Service and the writer's level",
      contents:[
        "The type of service you request plays a crucial role in determining the total price you need to pay. We deal with three kinds of services: PowerPoint, Writing, and Editing, and all are priced differently.",
        "Also, the level of the writer your work demands will affect your pricing—writers with a different set of qualifications charges differently. For instance, doctorate-level writers will charge more in comparison to graduate-level writers. "
      ],
      cta: 'Hire a Writer',
      class:'pay-first-img2'
    },
  ]

  money_back_guarantee:any = [
    {
      title: "100% Refund",
      contents:[
        "We take pride in our writers that we can deliver all the client's requirements on time. However, if we miss any deadline, we allow the customers to request a 100% refund. And if you are ready to extend the deadline, we offer you a compensation of 20%.",
        "Also, if you come across any technical issues during payment, you can ask for a refund. In this case, you are required to report the problem instantly before the assigned writer begins writing the task."
      ],
      cta: 'Avail Expert Assistance',
      class:'money-back-img1'
    },
    {
      title: "50% Refund",
      contents:[
        "We allow you to raise a request for a refund of confirmed orders if the client has canceled the order. However, in such cases, we only give a 50% refund of the total amount. All the refund requests undergo a confirmation check before accepting the request. Rebates do not apply when the error was from the client's side, such as delayed uploading of needed documents and delayed payment.",
        "For refunds requested due to plagiarism, a Turnitin report should be available. Reports from other plagiarism checkers are not acceptable. Without the Turnitin report, no refund will apply."
      ],
      cta: 'Hire a Writer',
      class:'money-back-img2'
    },
  ]

  how_to_do:any = [
    {
      contents:[
        "<strong>Fill in the Details:</strong><br>Input all your details such as name, subject topic, type of service, and deadline in the form. Ensure to enter all the details correctly so that we can meet your expectations and deliver top-quality work. However, try to place your order early as a sooner deadline will cost you more!",
        "<strong>Pay for your order:</strong><br>We ask our customers to pay for the required service in advance—no need to worry as your money is entirely safe with us. If you are not delighted with the output, feel free to benefit from our unlimited revision policy for free or request a refund stating your reason.",
        "<strong>Order in progress:</strong><br>Once you make your payment and we get a confirmation, our team assigns your work to the most suitable expert who works on it. In case you have any issues, you can connect with us, and we will try to resolve them.",
        "<strong>Get your paper via email:</strong><br>You can now relax and wait for your paper to be completed by a professional expert. You can invest your time in some other priority work you have in your hands or prepare for your exams. Meanwhile, our writer will work on your requirement, and once it is completed, we will send it to your email."
      ],
      cta: 'Hire A Pro Writer',
      class:'how-to-do-img'
    },
  ]

  place_an_order: any = [
    {
      title: '1. Place an Order',
      contents: [
        'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
      ],
      class: 'place-order-img'
    },
  ]
  make_a_payment:any = [
    {
      title: '2. Make a Payment',
      contents: [
        'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
      ],
      class:'make-payment-img'
    },
  ]
  order_in_progress: any = [
    {
      title: '3. Order in Progress',
      contents: [
        'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
      ],
      class:'order-progress-img'
    },
  ]
  receive_your_paper:any = [
    {
      title: '4. Receive your Paper',
      contents: [
        'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
      ],
      class:'receive-paper-img'
    }
  ]
  about_us_contents:any = [
    {
      headers:''
    },
    {
      title: '',
      contents: [
        'Our company CheapestEssay is a global business that helps clients with any type of writing. The company was started in 2014 as Cheapestessay.com. So far we have 342 writers of which 163 are active. We value our clients and our services are customer centered. Our business is registered with Liability Company that serves the entire world. We have more than 7,000 clients worldwide. Our pillar that propels our services is integrity, ethics and professionalism.',
      ],
      class: 'about-us-img'
    }
  ]
  revision_policy: any = [
    {
      headers: '',
    },
    {
      title:'We are Offering Unlimited Revisions.',
      contents: [
        "We provide revisions free of cost, however, in case the revision contains new instruction or information, any required changes will be chargeable. This means that if the customer wants to set revisions on the completed orders with additional instructions, they would be liable to pay some extra charges. In all the cases, where the revision work will require additional payment, the writing team will not start working on it, unless the payment has been cleared by the customer.",
        "You are able to request as many revisions as possible before your order is approved. However, please mind that you have only 20 days to request revisions for the paper either before or after your order is approved. There is unlimited number of revisions possible within the 20 days after the paper was delivered to you."
      ],
      class:'revision-policy-img'
    }
  ]
  faqs_content_data: any = [
    {
      title: 'FAQ',
      contents: [
        'Cheapest Essay Frequently Asked Questions by Our Customers About Our Service'
      ],
      class:'faqs-content-img'
    }
  ]
  ask_question_content: any = [
    {
      title: 'Do You have Questions?',
      contents: [
        'A customer support will assist you with everything including every questions regarding our service.'
      ],
      class:'ask-question-img'
    }
  ]
  contact_us_content: any = [
    {
      title: '',
      contents: [
        'Do you need someone to help you with your paper, or just want to say hi? Go right ahead!'
      ],
      class:'contact-us-img'
    }
  ]
  disclaimer_content: any = [
    {
      title: 'CheapestEssay.com Disclaimer Terms',
      contents: [
        'A customer placing an order with CheapestEssay.com automatically agrees to the following conditions:'
      ],
      class: 'disclaimer-img'
    }
  ]
}
