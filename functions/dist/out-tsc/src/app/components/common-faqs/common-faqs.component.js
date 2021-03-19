import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CommonFaqsComponent = class CommonFaqsComponent {
    constructor() {
        this.faq = [];
        this.faqIndexExpanded = -1;
        this.faq_home_content = [
            {
                question: 'How does CheapestEssay.com work?',
                answer: [
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
                question: 'Is it legal to use your service?',
                answer: "Of course, it is legal! We are a registered U.S corporation and conform to all of the laws for corporations within the United States. As well, you have the right to purchase any legal product or service, and purchasing original writing paper is completely legal!",
            },
            {
                question: 'How much does an Essay Writer Cost?',
                answer: "Our service is pre-paid, and our writers will only start working on your order after the payment is received.",
            },
            {
                question: 'Is CheapestEssay plagiarism free?',
                answer: "We check each order with our advanced anti-plagiarism software to ensure that your paper is 100% original. With our commitment to quality and zero tolerance policy for plagiarism, you can relax knowing we will meet your needs.",
            },
            {
                question: 'Who will write my paper?',
                answer: "You can notify us if you want to choose your own writer, or put the writers id number directly on the sign up form. Just remember that all our writers are experts in their respective fields. They have been hand-picked by our Quality Assurance Department and have years of writing experience.",
            },
        ];
    }
    ngOnInit() {
        if (this.faq_entry == null) {
            this.faq = this.faq_home_content;
        }
        else {
            this.faq = this.faq_entry;
        }
    }
};
__decorate([
    Input()
], CommonFaqsComponent.prototype, "faq_entry", void 0);
CommonFaqsComponent = __decorate([
    Component({
        selector: 'app-common-faqs',
        templateUrl: './common-faqs.component.html',
        styleUrls: ['./common-faqs.component.css']
    })
], CommonFaqsComponent);
export { CommonFaqsComponent };
//# sourceMappingURL=common-faqs.component.js.map