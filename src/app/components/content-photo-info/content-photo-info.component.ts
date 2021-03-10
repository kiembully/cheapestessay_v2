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
      title: 'Professional Writing Services',
      contents: [
        "Cheapest essay writing service is the only place you're guaranteed to get writing, editing, and PowerPoint services that are unique and of high quality. We aim to ensure all our clients get customer-tailored services that have pocket-friendly services. We have appropriately trained writers to ensure the write-ups meet your expectations.",
        "We operate 24/7 to ensure we fully attend to our clients' needs whenever they are and at any time. Customer satisfaction is our priority. We take time to research and understand what your work needs to give you top-notch quality. Our writers work diligently to meet our customer deadlines without compromising work quality.",
        "We serve students who seek assignments, essays, research, and other student-related services. We are also the number one content creators for business owners who seek to update their websites with fresh and unique content. Reach us today to get a high standard on any of the following services."
      ],
      class: 'about-service-sprite1',
    },
    {
      title: 'Can you write Essay?',
      contents: [
        "We deliver on any essay, whether narrative, descriptive, expository essays, and persuasive essays. Our essay writers provide online writing services that will help you improve and support your theme or proposition.",
        "Our professional essay writers are holders of degree and master's degrees in science, literature, and many others. So, they have the relevant knowledge to handle the requirements of your assignment."
      ],
      class: 'about-service-sprite2'
    },
    {
      title:'Research Paper, Coursework, Research Summary, Thesis/Dissertation Proposal and Assignments',
      contents:[
        "Research papers: Cheapest Essay has retained the best research writing professionals with varied skills and knowledge. Many writers are Ph.D. holders from renowned colleges and universities, and hence the ability to write high quality research.",
        "Coursework. We can put together the report from different experiments and research, do thorough research, and write suitable coursework for you. Coursework is a very demanding assignment for many students, making them perform poorly. With us, you don't need to worry about low grades.",
        "Thesis/dissertation proposal. Whichever level you are needed to develop a thesis/dissertation proposal, we got you covered. ",
        "Assignment. Cheapest Essay writing service has experienced professionals in varied academic fields in any assignment writing. They will bring out the concept area and show the point of emphasis to give you an assignment that shows your course understanding to your professor.",
      ],
      class:'about-service-sprite3'
    },
    {
      title:'Any Report: Simulation Report, Lab Report and Book or Movie Report and Review',
      contents:[
        "Lab report. We have professional writing services for putting down a lab report. We know the right format in which a lab report should follow from discussion through conclusion to referencing. With this information, we can put together a professional lab report for you.",
        "We are the number one writing helper when drafting a book/movie report and review. Our writers have advanced in different fields. They can go through a book or watch a movie as many times as possible to get the needed information to develop a well-written report or review.",
        "Any report. Our paper helper in the report writing sector has all that it takes to give you the best report. They are knowledgeable, investigative, and able to document both the statistical/experimental data. So, they can assist any student in a Master's degree level, undergraduate or graduate.",
        "If you experience difficulties in writing your report, we are here to help. Our writers are skilled in formatting and structuring any essay. Be it a business report, lab report, or financial ration analysis to help it attain the professionalism it requires. ",
      ],
      class:'about-service-sprite4'
    },
    {
      title: 'Article and Article Critique',
      contents:[
        "We have retained the best article writers from different corners of the world with varied writing skills. You have the opportunity to decide on any topic you want us to write and how complex or simple you want it to appear. We will deliver. Are you a website or blog owner? Our write my paper service is ready.",
        "Article critique. Our writers can go through the essay critically and analytically. The aim is to come up with the writer's argument while limiting their own opinions. We have the needed skills and knowledge to present a good article critique worth of good grades. We assign appropriate writing steps to your specific assignment."
      ],
      class:'about-service-sprite5'
    }
  ]

  pay_first_services:any[] = [
    {
      headers: [
        "Our prices are the best you can find in the market worldwide. We offer cheap essay writing services to all our clients. We guarantee to refund all the extra money if you find a more affordable writer in the first month of ordering.",
        "We consider a lot of factors before pricing your order. The moment you order with us, the following things will determine how much money you will pay."
      ]
    },
    {
      title: 'Deadline and the number of Pages you need',
      contents:[
        "Essays are priced differently according to different factors—the time you give us to get your work done. Expect to pay more if your deadline is short than when it is long.",
        "Also, the number of pages is a factor too. The number of pages is equally proportional to the number of words. So, the more the pages, the higher the price."
      ],
      class:'pay-first-img1'
    },
    {
      title: "Type of Service and the Writer's level you need",
      contents:[
        "The type of service you order us to deliver will determine the amount you will pay. There are three different types of services that we offer, and all are priced differently. They include; PowerPoint, writing, and editing.  ",
        "Also, the level of the writer your work demands will affect how you will pay. College, bachelor, and master writers have different qualifications; hence, all have different prices."
      ],
      class:'pay-first-img2'
    },
  ]

  money_back_guarantee:any = [
    {
      headers:[
        "We value our customers. Their satisfaction is what keeps us moving. We allow our clients to request a refund if they feel that the work did not meet the requirements.",
        "We allow for an unlimited number of revisions within a specified period of submission. It means that we do not charge for revisions within that period. Below are our refund policies.",
      ]
    },
    {
      title: "100% Refund",
      contents:[
        "Meeting the stipulated deadline is a highly valued guarantee needed by every client. So, we allow for a 100% refund request for those we miss to beat their deadline. You can extend the time and give you a compensation of 20%. ",
        "One can apply for a 100% refund for errors in payment, such as double payment. You need to report the issue immediately before the assigned writer begins writing the task. "
      ],
      class:'money-back-img1'
    },
    {
      title: "50% Refund",
      contents:[
        "One can request a 50% refund for confirmed orders but later canceled by the client. Remember, all refund requests must go through a confirmation check to check its viability. Refunds do not apply when the error was from the client's side, such as delayed uploading of needed documents and delayed payment.",
        "For refunds requested due to plagiarism, a Turnitin report should be available. Reports from other plagiarism checkers are not acceptable. Without the Turnitin report, no refund will apply."
      ],
      class:'money-back-img2'
    },
  ]

  how_to_do:any = [
    {
      contents:[
        "Fill out the order form. At this stage, input your details. These include name, subject topic, contact, and deadline of your work. Ensure you provide detailed information to increase the chances of getting good quality work. Place your orders early enough. Emergency orders will cost you more, making it expensive.",
        "Make a payment. Provide payment details at this stage. Our online payment page is secure. Proceed to make the payment. We offer different payment options, which include PayPal and Credit Card.",
        "Order in progress. At this stage, an essay writer begins working on your order after confirmation of details. The most qualified paper helper gets assigned to your work.",
        "Order Submission. Once the essay writers finish with the orders, a team of specialists performs a quality assurance test. Here, they check the uniqueness of the work using plagiarism software. We send the assignment to your registered email address."
      ],
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
