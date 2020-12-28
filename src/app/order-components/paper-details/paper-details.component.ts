import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-paper-details',
  templateUrl: './paper-details.component.html',
  styleUrls: ['./paper-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PaperDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  frmPapers = new FormGroup({
    topic: new FormControl('', [Validators.required]),
    paper: new FormControl('Essay'),
    subject: new FormControl('English'),
    deadline: new FormControl(6)
  })

  // validations
  topicErrorMsg() {
    if (this.frmPapers.controls.topic.hasError('required')) {
      return 'This value should not be blank';
    }
  }

}
