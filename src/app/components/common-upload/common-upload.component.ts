import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ApiServices } from 'src/app/api.service';
import { loggedin_session } from 'src/app/data/ui-services';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import {FormControl, FormGroup} from '@angular/forms';
// @ts-ignore

@Component({
  selector: 'app-common-upload',
  templateUrl: './common-upload.component.html',
  providers: [ApiServices,loggedin_session],
  styleUrls: ['./common-upload.component.css']
})

export class CommonUploadComponent implements OnInit {
  _URL = this._auth._baseUrl + "uploadmaterial";
  isProgressLoading: boolean = false;

  @Input() public order_id: any;
  
  frmUploadMaterial: any = [];

  uploader: FileUploader = new FileUploader({ url: this._URL });
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;

  constructor(
    private _auth: ApiServices,
    public _session: loggedin_session,
    private router: Router,
    public dialogRef:MatDialogRef<CommonDialogComponent>,) {
    this.uploader = new FileUploader({
      url: this._URL,
      maxFileSize: 20 * 1024 * 1024,
      allowedMimeType: ['image/png', 'image/x-citrix-png', 'image/x-png', 'image/jpeg', 'image/x-citrix-jpeg', 'image/gif', 'image/bmp', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/pdf', 'text/plain']
    })
  }

  ngOnInit(): void {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }


  isSuccess: boolean = false;
  // submit files 
  uploadFiles() {
    this.isProgressLoading = true;

    var formData = new FormData();
    formData.append("uploaded_token", (this.order_id > 0) ? '' : (!this._session.isTokenExisting('uploaded_token')) ? localStorage.getItem('uploaded_token') : '');
    formData.append("user_token", (!this._session.isTokenExisting('user_token')) ? localStorage.getItem('user_token') : '');
    formData.append("order_id", (this.order_id > 0) ? this.order_id : '');

    this.frmUploadMaterial.forEach(element => {
      formData.append('material', element);
    });

    this._auth.uploadFiles(formData).subscribe(
      (res) => {
        this.isProgressLoading = false;
        localStorage.removeItem('uploaded_token');
        localStorage.setItem('uploaded_token', res.data.uploaded_token);
        this.isSuccess = res.status;
        if (res.status) {
          localStorage.setItem('file_update', 'true')
        } else {
          localStorage.setItem('file_update', 'false')
        }
      },
      (err) => console.log(err)
    )
  }

  fileChangeEvent(event) {
    var item = event;
    if (item && item.length > 0) {
      for (let i = 0; i < item.length; i++) {
        var element = item[i];
        this.frmUploadMaterial.push(element)
      }
    }
  }

  closeDialog() {
    this.dialogRef.close()
  }
  
}
