import { AfterViewInit, Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { ApiServices } from 'src/app/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { new_order_form_default } from '../data/data';
import { loggedin_session } from '../data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-writers-profile',
  templateUrl: './writers-profile.component.html',
  providers: [ApiServices, new_order_form_default, loggedin_session],
  styleUrls: ['./writers-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WritersProfileComponent implements OnInit {

  hireWriterForm:any = this._data.setOrders;
  
  constructor(
    public route: ActivatedRoute,
    private _auth: ApiServices,
    private _data: new_order_form_default,
    private router: Router,
    public _session: loggedin_session
    ) { }

  
  dataSource:any;
  displayedColumns:string[] = [
    // 'addedon',
    // 'customer_no',
    'rating_number',
    // 'remark',
    // 'status',
    // 'total_orders',
  ];
  isProgressLoading:boolean = false;

  frmWritersProfile = new FormGroup({
    writer_id: new FormControl('')
  })
  ngOnInit(): void {
    this.frmWritersProfile.patchValue({
      writer_id: this.route.snapshot.paramMap.get('id')
    })
    this.getWritersProfile();

    this.hireWriterForm.patchValue({
      preferred_writer: "my_previous_writer",
      writer_id: this.route.snapshot.paramMap.get('id'),
    })
  }
    
  @ViewChild(MatSort) sort: MatSort;
  writers_data:any;
  getWritersProfile() {
    this.isProgressLoading = true;
    this._auth.getWritersProfile(this.frmWritersProfile.value).subscribe(
      res => {
        this.isProgressLoading = false;
        console.log(res.data);
        this.writers_data = res.data;
        this.dataSource = new MatTableDataSource<reviews>(res.data.reviews);
        this.dataSource.sort = this.sort;
        setTimeout(() => {
          this.dataSource.sort = this.sort;
        });
      }
    )
  }

  hireWriter() {
    this.isProgressLoading = true;
    this._auth.getOrderOptions(this.hireWriterForm.value).subscribe(
      res => {
        console.log(jwt_decode(res.data.order_token).writer_id);
        this.isProgressLoading = false;
        localStorage.setItem('set_order_token', res.data.order_token);
        this.router.navigate(['/order']);
      }
    )
  }

}

export interface reviews {
  addedon: string,
  customer_no: number,
  rating_number: number,
  remark: string,
  status: number,
  total_orders: number,
}