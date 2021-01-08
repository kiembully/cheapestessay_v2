import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {FormControl, FormGroup} from '@angular/forms';

const URL = "https://e6djdtoi97.execute-api.us-east-2.amazonaws.com/dev/uploadmaterial"

@Component({
  selector: 'app-common-upload',
  templateUrl: './common-upload.component.html',
  styleUrls: ['./common-upload.component.css']
})
export class CommonUploadComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  frmUploadMaterial = new FormGroup({
    material: new FormControl(),
    uploaded_token: new FormControl(),
    user_token: new FormControl(localStorage.getItem('user_token')),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  uploadFiles() {
    console.log(this.uploader)
  }
  
}
