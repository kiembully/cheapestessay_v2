import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { new_order_form_default } from '../../data/data';
import { loggedin_session } from '../../data/ui-services';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-paper-details',
  templateUrl: './paper-details.component.html',
  styleUrls: ['./paper-details.component.css'],
  providers: [ApiServices, new_order_form_default, loggedin_session],
  encapsulation: ViewEncapsulation.None,
})
export class PaperDetailsComponent implements OnInit {

  @Input() public paper_data: any;
  user_token_form = new FormGroup({
    user_token: new FormControl(this._auth.getToken()),
  })


  constructor(
    private _auth: ApiServices,
    private _defaultOrder: new_order_form_default,
    public _session: loggedin_session
  ) { }


  frmPapers = this._defaultOrder.setOrders

  paper_list: any;
  other_paper_list: any;
  subject_list: any;
  other_subject_list: any;
  deadline_list: any;
  top_writer_list: any;
  other_writer_list: any;
  format_style_list:any;
  ngOnInit(): void {
    this.paper_list = this.paper_data[1].data;
    this.other_paper_list = this.paper_data[2].data;
    this.subject_list = this.paper_data[4].data;
    this.other_subject_list = this.paper_data[5].data;
    this.deadline_list = this.paper_data[6].data;
    this.format_style_list = this.paper_data[7].data;
    this.top_writer_list = this.paper_data[9].data;
    this.other_writer_list = this.paper_data[10].data;

    this.displayOldWriters();
  }
  
  public recent_writer_list:any;
  displayOldWriters() {
    if (!this._session.isTokenExisting('user_token')) {
      this._auth.getOldWriters(this.user_token_form.value).subscribe(
        res => {
          this.recent_writer_list = res.data
        }
      )
    }
  }
  
  // patching values
  patchDeadline(e) {
    this.frmPapers.patchValue({
      deadline: e,
    })
  }
  patchPageTotal(e) {
    this.frmPapers.patchValue({
      page: e,
    })
  }
  patchSourceTotal(e) {
    this.frmPapers.patchValue({
      source: e
    })
  }

  // validations
  topicErrorMsg() {
    if (this.frmPapers.controls.topic.hasError('required')) {
      return 'This value should not be blank';
    }
  }
  otherFormatErrorMsg() {
    if (this.frmPapers.controls.other_format  .hasError('required')) {
      return 'This value should not be blank';
    }
  }
  detailsErrorMsg() {
    if (this.frmPapers.controls.add_detail  .hasError('required')) {
      return 'This value should not be blank';
    }
  }
  otherPaperErrorMsg() {
    if (this.frmPapers.controls.other_paper  .hasError('required')) {
      return 'This value should not be blank';
    }
  }

  // interpreting of data 
  getDeadlineValue(val) {
    let new_val: number;
    switch (val) {
      case 9: {new_val = 0; return new_val}
      case 8: {new_val = 1; return new_val}
      case 7: {new_val = 2; return new_val}
      case 6: {new_val = 3; return new_val}
      case 95: {new_val = 4; return new_val}
      case 92: {new_val = 5; return new_val}
      case 4: {new_val = 6; return new_val}
      case 89: {new_val = 7; return new_val}
      case 3: {new_val = 8; return new_val}
      case 2: {new_val = 9; return new_val}
      case 86: {new_val = 10; return new_val}
      case 83: {new_val = 11; return new_val}
      
    }
  }

}
