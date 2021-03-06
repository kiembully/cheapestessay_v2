import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-common-order-details-paper',
  templateUrl: './common-order-details-paper.component.html',
  styleUrls: ['./common-order-details-paper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonOrderDetailsPaperComponent implements OnInit {

  @Input() public paper_details: any;
  @Input() public order_details:any;
  orderIsCompleted:boolean;
  constructor() { }

  ngOnInit(): void {
    this.orderIsCompleted = (this.order_details.files.writer_files.data != null);
  }

}
