import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-common-faqs-data',
  templateUrl: './common-faqs-data.component.html',
  styleUrls: ['./common-faqs-data.component.css']
})
export class CommonFaqsDataComponent implements OnInit {

  constructor(public sanitized: DomSanitizer) { }

  ngOnInit(): void {
  }

  panelOpenState:boolean = false;

  @Input()expanded:number;
  @Input() public faq_home_content : any;
  faqIndexExpanded: number = -1;
  
  togglePanels(index: number) {
      this.faqIndexExpanded = (index == this.faqIndexExpanded) ? -1 : index;
  }

}
