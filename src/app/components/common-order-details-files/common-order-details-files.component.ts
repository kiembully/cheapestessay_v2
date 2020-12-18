import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-order-details-files',
  templateUrl: './common-order-details-files.component.html',
  styleUrls: ['./common-order-details-files.component.css']
})
export class CommonOrderDetailsFilesComponent implements OnInit {

  @Input() public order_details:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
