import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-money-back-guarantee',
  templateUrl: './money-back-guarantee.component.html',
  styleUrls: ['./money-back-guarantee.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MoneyBackGuaranteeComponent implements OnInit {

  constructor() { }

  panelMoneyBackState: boolean = false;

  ngOnInit(): void {
  }

  mgbContents:any = [
    {
      class: 'wrap-full-refund',
      header: '100% Refund',
      list: [
        "We missed the deadline and you have not received the paper. Please note that in this case, you may ask for a 100% refund. On the other hand, if you give us more time to complete your paper, we will give you 20% as a compensation.",
        "We discover that no suitable writer is available for you. In this case, we will contact you to initiate the refund ourselves.",
        "As a customer, you deserve the right to ask for a revision. Moreover, customer will get 100% refund if the level of plagiarism is higher than 10%. ( Note that the plagiarism level allowed by Our Company must be less than 10%).",
        "There was an error in payment transactions (duplicate orders, dual payment). You will need to report the case to us immediately. You will get a 100% refund if the writer has not yet started within 30 minutes since your order had been placed.",
        "If you are billed twice, you need to notify us immediately. You need to send us both receipts so we can properly address the issue and process the full refund of the extra charge. This instance happens in very rare occasions. There is no way for a customer to be billed twice for a single order, unless he paid for it by mistake.",
        "You are convinced that our writer has not followed your requirements or the final version of the paper doesn't fit the topic, feel free to ask for a refund. However, it needs to go through an investigation process and may take few more weeks to get the result from the investigation team. The percentage of refund may vary on the result of the investigation. Remember that our clients can request a limitless number of revisions to their copy within 20 days after the order delivery. By using the revision feature during the period mentioned earlier, you save your money as the service is free.",
        "All refund requests undergo a confirmation procedure. Once the request is accepted, we return money to a client's original payment method or Credit Balance.",
      ]
    },
    {
      class: 'wrap-half-refund',
      header: '50% Refund',
      list: [
        "We are unable to offer a writer for a revision. Credit to the account is also offered for easier and faster transaction.",
        "The writer was confirmed and over a half of remaining deadline has passed, but the customer decided to cancel the order. The amount of refund can be 50%, to cover the effort of the company and the writer in attempt to provide you with the product and services purchased. Credit to the account is also offered for easier and faster transaction."
      ]
    },
    {
      class: 'wrap-20-refund',
      header: '20% Refund',
      list: [
        'We missed the deadline and you have not received the paper. Please note that in this case, you may ask for a full refund. On the other hand, if you give us more time to complete your paper, we will give you 20% as a compensation through PayPal or Credit balance on the account.'
      ]
    }
  ]

  noRefundContent:any = [
    {
      header: 'Guaranteed On Time Delivery',
      list: [
        'On time delivery of all the orders is guaranteed. Sometimes delay happens because of the late upload of the needed materials on the customer`s side. In this situation, NO REFUND CAN BE GRANTED. That is why it is always ideal to send the details of the task and the required additional resources all at once when making the initial order.',
      ]
    },
    {
      header: 'Plagiarized Content',
      list: [
        "If the claim is that the paper is plagiarized, a Turnitin report is needed. There will be no other reports that can be accepted aside from this or else NO REFUND is possible."
      ]
    },
    {
      header: 'Delayed Payment',
      list: [
        "If the customer claims that the order has been delayed when the reality is that the payment was also delayed, we shall not bear responsibility for it. Moreover, a REFUND CANNOT BE REQUESTED.",
        "Note: in the case of revision deadline, the previously mentioned delay refunds and the recalculation of the price do not apply as the end dates are different."
      ]
    },
    {
      header: 'Disputed Claims',
      list: [
        "If the customer is not satisfied and would like to get a refund instead, the agency administration will conduct an investigation. The claim and refund will be based on its result. We always want our customers to be fully satisfied. Hence, we will always do our best just to achieve the customer`s satisfaction.",
        "Additionally, we don’t guarantee grades, and a REFUND WILL NOT BE PROVIDED if you were poorly assessed. But we might help you for next order.",
        "<strong>IMPORTANT NOTE</strong>: Refund requests must be made within 30 days from the date we submitted the paper. If requests are made after 30 days, a partial credit on the Cheapest Essay accunt can be provided if your refund is valid."
      ]
    }
  ]

}
