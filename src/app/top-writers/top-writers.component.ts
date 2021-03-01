import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service'
import {MatTableDataSource} from '@angular/material/table';
import {topWriters} from '../data/user-data';
import { new_order_form_default } from '../data/data';
import { Router } from '@angular/router';
import { loggedin_session } from '../data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-top-writers',
  templateUrl: './top-writers.component.html',
  providers: [ApiServices, new_order_form_default, loggedin_session],
  styleUrls: ['./top-writers.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TopWritersComponent implements OnInit {

  hireWriterForm:any = this._data.setOrders;

  constructor(
    private _auth: ApiServices,
    private _data: new_order_form_default,
    private router: Router,
    public _session: loggedin_session
    ) { }
  
  dataSource:any;
  displayedColumns:string[] = ['user_name', 'profile_pic', 'description', 'hire_button'];
  displayedColumnsM:string[] = ['user_name'];

  isProgressLoading:boolean = false;
  displayWriters() {
    this._auth.getTopWritersProfile().subscribe(
      res => {
        console.log(res);
        this.dataSource = new MatTableDataSource<topWriters>(res.data);
      }
    )
  }

  ngOnInit(): void {
    this.hireWriterForm.patchValue({
      preferred_writer: "my_previous_writer",
      user_token: localStorage.getItem('user_token')
    })
    this.displayWriters();
    this.hireWriterForm.valueChanges.subscribe(
      (value:any) => {
        this.setOrder(value)
      }
    )
  }

  setWriter(id) {
    this.hireWriterForm.patchValue({
      writer_id: id,
    })
  }

  setOrder(value) {
    this.isProgressLoading = true;
    this._auth.getOrderOptions(value).subscribe(
      res => {
        console.log(jwt_decode(res.data.order_token).writer_id);
        this.isProgressLoading = false;
        localStorage.setItem('set_order_token', res.data.order_token);
        this.router.navigate(['/order']);
      }
    )
  }

  getRate(val) {
    return (val / 5) * 100 + '%'
  }

}