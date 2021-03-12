import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {balances} from '../data/user-data';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiServices} from 'src/app/api.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class BalanceComponent implements OnInit {

  constructor(
    private _auth: ApiServices,
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
  ) { }
  tokenForm = new FormGroup({
    user_token: new FormControl(this._auth.getToken())
  })
  isProgressLoading:boolean = false;

  displayedColumns:string[] = ['date','transaction_text','journal_text','transaction_amount','current_wallet_balance'];
  displayedColumnsMob:string[] = ['journal_text'];

  public myBalance:any = 'fetching...';
  dataSource:any;
  isEmpty:boolean = false;
  displayBalance() {
    this.isProgressLoading = true;
    this._auth.getBalance(this.tokenForm.value).subscribe(
      res => {
        this.myBalance = (!res.total_balance) ? 0 : res.total_balance;
        this.dataSource = new MatTableDataSource<balances>(res.data);
        this.dataSource.paginator = this.paginator;
        this.isProgressLoading = false;
        this.isEmpty = (res.data == undefined);
      }
    )
  }

  viewOrder(id) {
    this.router.navigate(['/my-orders/order-details', id])
  }

  gained(val) {
    let state = (val.indexOf('+') > -1);
    return state;
  }

  ngOnInit(): void {
    this.titleService.setTitle("Balance to Buy Essay Papers Online - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "n/a" },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "buy essay papers online" },
    );
    
    this.displayBalance();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

}