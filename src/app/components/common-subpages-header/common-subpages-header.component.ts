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
      subheader: 'Want to know how Cheapest Essay works on writing services? Here are the easy steps on how to place an order and use our services,also check the video available to guide place new order. Get the best result on given deadline. Remember, when using our service, the more information you can provide the better for the writer; rush orders are more expensive so we recommend you to place the order as soon as possible.'
    },
    {
      header: 'Cheapest Essay Guarantees',
      subheader: "Our writing and editing services guarantees customer centered and designed for the best benifit of our users. We offer refunds, revisions, 100% user's data security and more. We always advice our users to read our policies to know more about the guarantees we offer."
    },
    {
      header: 'Cheapest Essay Money Back Guarantee',
      subheader: 'Here in Cheapest Essay, we ensure that you stay happy after ordering our service, so all orders are covered under the Cheapest Essay Money Back Guarantee. We offers 50% and even full refund to our valued customers. Carefully read our full guidlines about Money Back Guarantee.'
    },
    {
      header: "Cheapest Essay's Pricing",
      subheader: 'Here you can find our easy-to-use approximation tool for you to know the price of your desired paper. Find out relevant prices for writing and editing on Cheapest Essay. Our pay-scale depends on service’s type, writer’s level, deadline and pages you need. You can add more details about your paper through our Order page.'
    },
    {
      header: 'About Cheapest Essay',
      subheader: 'Our company provides the top level writing and editing services at a reasonable price. We have the best and professional writers that are carefully selected that are gone through our strict hiring process to write your views and feild of your choice artistically.'
    },
    {
      header: 'Cheapest Essay Revision Policy',
      subheader: 'Cheapest Essay is a very responsible and reliable company and customer satisfaction is a topmost priority so we offer any revisions you need so that the service can fully meet your expectations. We always advice our customers to carefully read our revision policy guidelines. For more details, you can always contact our support for your convinience. '
    },
    {
      header: 'Cheapest Essay Privacy Policy',
      subheader: "Our company is very serious on our user's data security. We make sure that every detail and information shared with us will be never sell, rent or share the acquired details to any third parties. We request our visitors and customers  to read our privacy policy thoroughly."
    },
    {
      header: 'Cheapest Essay Terms of Use',
      subheader: 'Please read our Terms of Use carefully before using our service. By using our service, you are agreeing to be bound by our terms of use described below; and our privacy policy. If you do not wish to be bound by these terms and policies, please do not access or user our website or use of any of our services. The terms of use are provided on behalf or Cheapest Essay.'
    },
    {
      header: 'Cheapest Essay FAQs',
      subheader: 'Do you have questions about our writing and editing service? If you waant to know how our service works then read the answers at FAQs on our site and learn more about our service. These are the collection of frequently asked questions of our customers.'
    },
    {
      header: 'Contact To Cheapest Essay',
      subheader: 'Do you need someone to help you with your paper, or just want to say hi? Go right ahead! Our writing services are available 24/7. You can contact us by social media, mobil, email and through our customer service representative. Our professional supports will respond as soon as we get your inquiries.'
    },
    {
      header: 'Cheapest Essay Disclaimer',
      subheader: 'Our essay writing service employs hundreds of writers who specialize in different subject areas. It allows us to help with a wide range of papers on various topics to achieve a good result. We also guarantee fast delivery, 100% plagiarism free content, protection of your personal information, and low-cost and flawless quality!'
    },
    {
      header: 'شرح بالعربي',
      subheader: 'شرح مختصر لأهم النقاط باللغة العربية مع ترجمة مفردات الطلبية. ( اقرأ الترجمة باللون الأحمر )',
    }
  ]

  getOrderText(index) {
    return (index == 11) ? 'بلطا نلا' : 'Order Now'
  }

}
