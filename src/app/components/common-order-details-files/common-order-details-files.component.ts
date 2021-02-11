import { Component, OnInit, Input } from '@angular/core';
import { DialogTriggers } from 'src/app/data/ui-services'

@Component({
  selector: 'app-common-order-details-files',
  templateUrl: './common-order-details-files.component.html',
  providers: [DialogTriggers],
  styleUrls: ['./common-order-details-files.component.css']
})
export class CommonOrderDetailsFilesComponent implements OnInit {

  @Input() public order_details:any;

  constructor(public _dialog_trigger: DialogTriggers) { }

  ngOnInit(): void {
    localStorage.removeItem('file_update')
  }

  openMaterial(url) {
    window.open(url, '_blank')
  }

}
