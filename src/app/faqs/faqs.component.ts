import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqsComponent implements OnInit {

  panelOpenState = false;
  selectedPanelClass = '';
  panelToggleState:number;

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("FAQs about our Writing Service - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Do you have questions about our writing service? Want to know how it works then read the answers at FAQs on our site and learn more about our service." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "faqs" },
    );
  }

  selectPanel(index) {
    this.selectedPanelClass = 'panel'+index;
    let panelElement = document.getElementsByClassName(this.selectedPanelClass)[0];
    let panelClass = document.getElementsByClassName('subpage-icon');

    for (let index = 0; index < panelClass.length; index++) {

      if (panelClass[index].classList.contains(this.selectedPanelClass)) {
        if (panelElement.classList.contains('sprite-toggleopen')) {
            panelElement.classList.remove('sprite-toggleopen');
            panelElement.classList.add('sprite-toggleclose');
        } else if (panelElement.classList.contains('sprite-toggleclose')) {
            panelElement.classList.remove('sprite-toggleclose');
            panelElement.classList.add('sprite-toggleopen');
        }
      } else {
        panelClass[index].classList.remove('sprite-toggleclose');
        panelClass[index].classList.add('sprite-toggleopen');
      }
    }
  }

  faqsContent:any = [
    {
      label: 'General Questions',
      icon: 'question_answer',
      content: [
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
          header: 'Do I cheat when I use your service?',
          content:[
            'We provide you with just an example of how your work should be done. You have an amazing opportunity to learn from some of the best writers out there and model your future papers accordingly. You can treat our service as an online library tailored to your specific needs. And everyone knows that going to the library for research is NOT cheating.'
          ],
        },
        {
          header: 'Is it legal to use your service?',
          content:[
            'Of course, it is legal! We are a registered U.S corporation and conform to all of the laws for corporations within the United States. As well, you have the right to purchase any legal product or service, and purchasing original writing paper is completely legal!'
          ],
        },
        {
          header: 'What does your service offer to its customers?',
          content:[
            'We are a professional writing service, specializing in essays, term papers, course works, speech papers, presentations, projects, resumes, CVs, dissertations and a lot more.',
            'We are a team of trustworthy, hardworking writers and customer support representatives, who aim to produce a product that will please every single student and his or her teacher. Try us out and see why thousands of customers all over the world choose us!'
          ],
        },
        {
          header: 'Whom should I contact for additional information?',
          content:[
            'If you have any questions regarding your order, payment, or just about anything, do not hesitate to call our support center 24/7. We also offer you a live interactive chat feature to provide you with the necessary assistance you deserve.'
          ],
        },
        {
          header: 'Can I get a discount?',
          content:[
            'Yes we offer 15% discount for the first time users. We also have a <a mat-button routerLink="order">Lifetime discount</a>, just go to our discounts page and here you can see if you are eligible for our current discounts. If you have any questions about our discount programs please contact our Support Team for detailed instructions.'
          ],
        },
      ]
    },
    {
      label: 'Pricing & Payment',
      icon: 'payment',
      content: [
        {
          header: 'Can I make the payment after I’ve seen and approved my paper?',
          content:[
            'Our service is pre-paid, and our writers will only start working on your order after the payment is received.'
          ],
        },
      ]
    },
    {
      label: 'Order & Delivery',
      icon: 'receipt_long',
      content: [
        {
          header: 'How can I place my order?',
          content:[
            'Just fill in our short <a mat-button href="order">order form</a>. It’s that simple!'
          ],
        },
        {
          header: 'How do I work?',
          content:[
            'On the website, you need only access the order form. On this, we ask that you complete all fields with as much detail as possible, so that we have a complete picture of what you need. New customers will also need to create a personal account for purposes of communication during the process. Your completed order form will be analyzed and accepted. At this point, you will be asked to make payment, and we will locate the perfect writer for your work.'
          ],
        },
        {
          header: 'In what way is the paper formatted?',
          content:[
            'You can have your paper formatted in any academic style of your choice – for FREE. If no instructions are given, the default option is MLA, 12pt Arial, double-spaced with 1-inch margins and 280 words on a page.'
          ],
        },
        {
          header: 'What happens if my delivery is late?',
          content:[
            'This occurs only in very rare instances. Over 99% of our orders are delivered on or before the deadline date provided by the client. In the extreme instance of a missed deadline. But if we missed the deadline, and you have not received the paper. Please note that in this case, You may ask for a full refund. In the other hand, if you give us more time to complete your paper, we will give you 20% in compensation.'
          ],
        },
        {
          header: 'Do you accept orders from other countries?',
          content:[
            'We welcome customers from different parts of the globe. With our 24/7 availability, we are able to attend to the needs of customers in countries or regions such as Asia, Australia, Middle East, South America, the United States, and the United Kingdom.'
          ],
        },
        {
          header: 'How can I monitor the progress of my order?',
          content:[
            'You can contact us using the messaging system, Live Chat, call our Support team or email us with any problems or concerns you have. We also update the status of your order automatically like if it’s already processing, completed and etc.'
          ],
        },
        {
          header: 'When can you finish writing my paper?',
          content:[
            'The deadline is for you to decide. 3 hours is the earliest we can complete your order. The countdown to deadline will start as soon as you have made the payment. Please note that your chosen deadline is true for the first draft of your paper, the one without revisions. Revision takes slightly more time, and this must be taken into consideration while making an order.',
          ],
        },
        {
          header: 'What if I needed the writer to use specific materials for my order?',
          content:[
            'We strongly encourage you to provide the writer with as many documents as possible. After all, the quality of your paper will depend on this. Each order has the section "Files", and you can upload your documents directly for the writer to see them. Our system accepts most types of files up to 20 MB in size. If you cannot upload your document, you can contact the Customer Support Representatives who will gladly help you deliver your documents to your writer. You can also send your files to support@CheapestEssay.com and mention your order number in the message subject.',
          ],
        },
      ]
    },
    {
      label: 'About the Writers',
      icon: 'create',
      content: [
        {
          header: 'Do you write all types of assignments?',
          content:[
            'We do! You can order with us all types of paper as well as business or individual assignments. Even if you are not sure that we can find a writer to complete your work, place an inquiry and we will contact you.'
          ],
        },
        {
          header: 'Do you have writers in my specialization?',
          content:[
            'Naturally! Our main goal is to have a writer in our team who would be a specialist in only a few spheres of study, while others will be responsible for other areas. This ensures their full understanding of the topic and immersion in the subject.',
            'No matter what task complexity you have: mathematics, economics, nursing, engineering, chemistry, religious studies, ecology, biology or anything else – there will always be an expert in this field ready to help you!',
            'If you are not sure whether there is such a writer available for a current moment, feel free to place a free inquiry and check it! Our team will quickly scan the database for writers available and offer them to you!'
          ],
        },
        {
          header: 'Do all writers have to pass an evaluation?',
          content:[
            'No worries! All writers and editors who apply to work for our company undergo several tests to evaluate their knowledge and English and other skills. That way, we know that every expert working for CheapestEssay.com is well – educated and values working standards in freelance writing assistance.',
          ],
        },
        {
          header: 'Who will write my paper?',
          content:[
            'You can notify us if you want to choose your own writer, or put the writers id number directly on the sign up form. Just remember that all our writers are experts in their respective fields. They have been hand-picked by our Quality Assurance Department and have years of writing experience.',
          ],
        },
        {
          header: 'If I like the work of my previous writer, Can I choose him/her again?',
          content:[
            'Yes, you will be asked to enter the ID number of your writer on the order form.  If your writer is not available, another writer will be provided to complete your assignment.',
          ],
        },
      ]
    },
    {
      label: 'Quality of Service',
      icon: 'sentiment_very_satisfied',
      content: [
        {
          header: 'Why should I choose your service?',
          content:[
            'For being in the business for several years, we definitely know the market and customer’s requests. The reason why we are at the top of the business and have thousands of clients who trust us and come back to us for help.',
            'Our chat works 24/7 for your convenience. Ask us anything you want to know and be sure that we will do every kind of written paper for your complete satisfaction!'
          ],
        },
        {
          header: 'Can you assure me that your service is plagiarism- free?',
          content:[
            'We check each order with our advanced anti-plagiarism software to ensure that your paper is 100% original. With our commitment to quality and zero tolerance policy for plagiarism, you can relax knowing we will meet your needs.',
          ],
        },
      ]
    },
    {
      label: 'Account Security',
      icon: 'admin_panel_settings',
      content: [
        {
          header: 'Can you protect my identity and my ordered essay?',
          content:[
            'Your personal information is encrypted, and we have effective fire walls in place. No one will ever know your identity or that you have used the services of CheapestEssay.com unless you choose to reveal this information.',
            'Once an essay or any other type of writing is delivered to and accepted by a customer, that writing piece is deleted from our system. It will never been seen distributed or sold anywhere – in fact, it becomes the customer’s property.'
          ],
        },
        {
          header: 'I lost my password. What should I do?',
          content:[
            'You can always reset your password using the ‘Forgot Password’ link from our login page, located under the ‘Login’ button.',
          ],
        },
      ]
    },
  ]

}
