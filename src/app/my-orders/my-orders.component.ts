import {OnInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {all_orders} from '../data/user-data';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiServices} from 'src/app/api.service';
import { Router } from '@angular/router';
import { DialogTriggers, countdownTimer } from 'src/app/data/ui-services';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  providers: [ApiServices, DialogTriggers, countdownTimer],
  encapsulation: ViewEncapsulation.None,
})
export class MyOrdersComponent implements OnInit {

  tokenForm = new FormGroup({
    user_token: new FormControl(localStorage.getItem('user_token'))
  })
  dataSource:any;
  isProgressLoading:boolean = false;
  isEmpty:boolean = false;
  displayMyOrders() {
    this.isProgressLoading = true;
    this._auth.getMyOrders(this.tokenForm.value).subscribe(
      res => {
        this.dataSource = new MatTableDataSource<all_orders>(res.data);
        this.dataSource.paginator = this.paginator;
        this.isProgressLoading = false;
        this.isEmpty = (res.data == undefined) ? true : false;
      }
    )
  }

  constructor(
    private _auth: ApiServices,
    private router: Router,
    public _dialogTrigger: DialogTriggers,
    public _timer: countdownTimer,
    private titleService: Title,
    private metaTagService: Meta
    ) { }

    
  setTimer(order_date: string, days: number, hours: number, minutes: number, seconds: number) {
      let timestamp = this._timer.getDeadline(
        order_date,
        days,
        hours,
        minutes,
        seconds
      )
      return this._timer.displayDeadline(timestamp);
  }

  ngOnInit(): void {
    this.titleService.setTitle("Buy Essay Online | Hire Writers - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Buy essays online and get professional assistance with any writing tasks from our experienced and skilled writers. Place order and get quality paper." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "Buy essay online, hire writers" },
    );
    
    this.displayMyOrders();
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    clearInterval();
  }

  filter:any[] = [
    {value:7,viewValue:'All Orders'},
    {value:0,viewValue:'Unpaid Orders'},
    {value:1,viewValue:'Orders in Progress'},
    {value:2,viewValue:'Completed'},
    {value:3,viewValue:'Revision Orders'},
    {value:5,viewValue:'Cancelled'},
    {value:6,viewValue:'Refunded'},
  ];
  selected = new FormControl(7);

  displayedColumns:string[] = ['button','order_id','date_added','total','pages','topic','order_status','deadline','action','open'];
  displayedColumnsM:string[] = ['order_id'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
  }

  timer_status:boolean = false;
  getOrderStatusDisplay(p_description,p_status) {
    let state:string;
    if (p_status > 0 && (p_description == 3 || p_description == 9 || p_description == 11)) {
      state = '#3B7CFF';
      this.timer_status = true;
    } else {
      this.timer_status = false;
      if (p_description == 2) {
        state = '#13B675';
      } else if ((p_status == 3)||(p_description == 9)||p_description == 11) {
        state = '#3B7CFF';
      } else if ((p_description == 4)||p_description == 12) {
        state = '#F5A623';
      } else {
        state = '#D0555A';
      }
    }
    return state;
  }

  selectOrderId(id) {
    this.router.navigate(['/my-orders/order-details', id])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}