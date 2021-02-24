import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ApiServices } from 'src/app/api.service'
import {MatTableDataSource} from '@angular/material/table';
import {topWriters} from '../data/user-data';

@Component({
  selector: 'app-top-writers',
  templateUrl: './top-writers.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [ApiServices],
  styleUrls: ['./top-writers.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TopWritersComponent implements OnInit {

  constructor(private _auth: ApiServices) { }

  dataSource:any;
  displayedColumns:string[] = ['user_name', 'profile_pic', 'description', 'hire_button'];
  displayedColumnsM:string[] = ['user_name'];

  isProgressLoading:boolean = false;
  displayWriters() {
    this.isProgressLoading = true;
    this._auth.getTopWritersProfile().subscribe(
      res => {
        console.log(res);
        this.isProgressLoading = false;
        this.dataSource = new MatTableDataSource<topWriters>(res.data);
      }
    )
  }

  ngOnInit(): void {
    this.displayWriters()
  }

}