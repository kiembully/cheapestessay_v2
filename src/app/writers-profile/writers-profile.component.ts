import { AfterViewInit, Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { ApiServices } from 'src/app/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-writers-profile',
  templateUrl: './writers-profile.component.html',
  providers: [ApiServices],
  styleUrls: ['./writers-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WritersProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _auth: ApiServices
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

}

export interface reviews {
  addedon: string,
  customer_no: number,
  rating_number: number,
  remark: string,
  status: number,
  total_orders: number,
}