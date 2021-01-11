import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';

const URL = "https://e6djdtoi97.execute-api.us-east-2.amazonaws.com/dev/uploadmaterial";

@Component({
  selector: 'app-common-upload',
  templateUrl: './common-upload.component.html',
  styleUrls: ['./common-upload.component.css']
})

export class CommonUploadComponent implements OnInit {
  _URL = "https://e6djdtoi97.execute-api.us-east-2.amazonaws.com/dev/uploadmaterial";
  frmUploadMaterial:FormGroup;

  uploader:FileUploader  = new FileUploader({url: URL});
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  
  constructor(private _auth: ApiServices, private formBuilder: FormBuilder) {
    this.uploader = new FileUploader({url: URL})
  }

  ngOnInit(): void {
    this.frmUploadMaterial = this.formBuilder.group({
      material: ['']
    });
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  
  // submit files 
  uploadFiles() {
    var formData = new FormData();
    formData.append("uploaded_token", "");
    formData.append("user_token", "");
    formData.append("order_token", "");
    formData.append('material', this.frmUploadMaterial.value);

    console.log(formData)
    this._auth.uploadFiles(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }

  //when you drop files in the queue
  dropped(e) {
    if (e.length > 0) {
      var file = e;
      this.frmUploadMaterial.patchValue({
        material: file
      });
    }
  }

  // when you add files in queue via input type input 
  onFileSelect(event) {
    console.log(event)
    if (event.length > 0) {
      var file = event;
      this.frmUploadMaterial.patchValue({
        material: file
      });
    }
  }
  
}
