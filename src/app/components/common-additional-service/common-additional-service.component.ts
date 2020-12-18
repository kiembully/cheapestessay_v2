import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-common-additional-service',
  templateUrl: './common-additional-service.component.html',
  styleUrls: ['./common-additional-service.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonAdditionalServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addnl_service_list:any = [
    "FREE APA/MLA/Chicago formatting",
    "FREE Turnitin Report",
    "FREE Sources and Reference",
    "FREE Revisions",
    "FREE Proofreading",
    "FREE 24/7 Customer Support",
    "and if we missed the deadline, you will get a 100% refund."
  ]

}
