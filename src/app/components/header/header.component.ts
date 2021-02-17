import { Component, OnInit, HostListener } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import {user_functions} from '../../data/user-data';
import { Router, Event, NavigationEnd } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { loggedin_session } from '../../data/ui-services';

// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [loggedin_session],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  // setting up users status and other data 
  new_user_functions = new user_functions;
  isUserOnline:number;
  current_path:string;

  decoded_user_token:any;
  headerForm = new FormGroup({
    first_name: new FormControl('User Firstname'),
    last_name: new FormControl('User Firstname'),
    email: new FormControl(''),
    balance: new FormControl(0),
  })

  email: any;
  isServicesActive:any = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public _session: loggedin_session
    ) {

    // detects changes thru dynamic router
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isUserOnline =  this.new_user_functions.getUserStatus();
        this.current_path = this.new_user_functions.getCurrentPath();
        this.isServicesActive = this.new_user_functions.getCurrentPath().includes('services');

        // check login status
        if (!this._session.isTokenExisting('user_token')) {
          if (this._session.tokenExpired(localStorage.getItem('user_token'))) {
            this._session.openSnackBar('Session has expired, Please Login', 'Ok')
          }
        }

        this.setProfileInfo();
        this.closePanel();
      }
    });
  }

  ngOnInit(): void {
    this.setProfileInfo();
    // setInterval(()=>{this.setProfileInfo()}, 1500)
  }

  setProfileInfo() {
    if (!!localStorage.getItem('user_token')) {
      this.decoded_user_token = jwt_decode(localStorage.getItem('user_token'))
      this.headerForm.patchValue({
        first_name: this.decoded_user_token.user_details.first_name,
        last_name: this.decoded_user_token.user_details.last_name,
        email: this.decoded_user_token.user_details.user_email,
        balance: !(this.decoded_user_token.account.total_balance) ? 0 : this.decoded_user_token.account.total_balance,
      })
    }
  }

  content_id: number;
  // important note
  // if content_id's assigned value is 0, the dialog box will display user-entry component

  isHeaderVisible(path:string, user_status:number) {
    let state:boolean;
    if ((path == 'order') || (this.new_user_functions.getCurrentPath().includes('my-orders') == true) || (this.new_user_functions.getCurrentPath().includes('edit-order') == true) || (path == 'profile') || (path == 'balance') || (path == 'discount') || path == 'level' || (path == 'order-details') || (this.new_user_functions.getCurrentPath().includes('checkout') == true) || (this.new_user_functions.getCurrentPath().includes('update-card') == true)) {
      state = (user_status == 0) ? true : false;
    } else {
      state = true;
    }
    return state;
  }

  // check which header is visible
  isProfileHeaderVisible(path:string, user_status:number) {
    let state:boolean;
    if ((path == 'order') || (this.new_user_functions.getCurrentPath().includes('my-orders') == true) || (this.new_user_functions.getCurrentPath().includes('edit-order') == true) || (path == 'profile') || (path == 'balance') || (path == 'discount') || path == 'level' || (path == 'order-details') || (this.new_user_functions.getCurrentPath().includes('checkout') == true) || (this.new_user_functions.getCurrentPath().includes('update-card') == true)) {
      state = (user_status == 0) ? false : true;
    } else {
      state = false;
    }
    return state;
  }

  @HostListener('window:resize', ['$event'])
  isBtnTotalVisible(event?) {
    let width = window.innerWidth;
    let state = (this.current_path == 'order' && width <= 768) ? true : false;
    return state;
  }

  getOrderTotal() {
    let total = jwt_decode(localStorage.getItem('set_order_token')).totalPrice;
    return total;
  }

  openLogoutDialog() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      minHeight: '200px',
      width: '550px',
      backdropClass: 'common-dialog',
      panelClass: 'panel-dialog',
      data: {
        // displays logout dialog
        content_id: 3
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  panelOpenState = false;
  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
  mobileNavState = false;
  toggleMobileMenu() {
    this.mobileNavState = !this.mobileNavState;
  }
  closePanel() {
    this.mobileNavState = false;
    this.panelOpenState = false;
  }
  menuServices:any = [
    {
      row: [
        {id: 'essay-writing-services', name: 'Essay (Any Type)'},
        {id: 'assignment-writing-service', name: 'Assignment'},
        {id: 'admission-essay', name: 'Admission Essay'},
        {id: 'thesis-writing-services', name: 'Thesis'},
      ]
    },
    {
      row: [
        {id: 'research-paper-writing-services', name: 'Research Paper'},
        {id: 'math-homework-help', name: 'Math Problems'},
        {id: 'professional-cover-letter-writing-services', name: 'Cover Letter'},
        {id: 'dissertation-help', name: 'Dissertation'},
      ]
    },
    {
      row: [
        {id: 'coursework-writing-services', name: 'Course Work'},
        {id: 'book-movie-review-services', name: 'Book Report/Review'},
        {id: 'cv-writing-services', name: 'CV Writing'},
        {id: 'thesis-writing-services', name: 'Thesis Proposal'},
      ]
    },
    {
      row: [
        {id: 'case-study-writing', name: 'Case Study'},
        {id: 'book-movie-review-services', name: 'Movie Review'},
        {id: 'cv-editing-services', name: 'CV Editing'},
        {id: 'writing-an-essay-outline', name: 'Outline'},
      ]
    },
    {
      row: [
        {id: 'write-my-essay', name: 'Write My Essay'},
        {id: 'lab-report-abstract', name: 'Lab Report'},
        {id: 'article-writing-services', name: 'Article Review'},
        {id: 'blog-writers-for-hire', name: 'Blog Writing'},
      ]
    },
    {
      row: [
        {id: 'research-article-summary', name: 'Research Summary'},
        {id: 'powerpoint-presentation-service', name: 'PowerPoint'},
        {id: 'report-writing-service', name: 'Report'},
        {id: 'services', name: 'Full Service List'},
      ]
    },
  ]
  menuServicesM:any = [
    {id: 'essay-writing-services', name: 'Essay (Any Type)'},
    {id: 'assignment-writing-service', name: 'Assignment'},
    {id: 'admission-essay', name: 'Admission Essay'},
    {id: 'thesis-writing-services', name: 'Thesis'},
    {id: 'research-paper-writing-services', name: 'Research Paper'},
    {id: 'math-homework-help', name: 'Math Problems'},
    {id: 'professional-cover-letter-writing-services', name: 'Cover Letter'},
    {id: 'dissertation-help', name: 'Dissertation'},
    {id: 'coursework-writing-services', name: 'Course Work'},
    {id: 'book-movie-review-services', name: 'Book Report/Review'},
    {id: 'cv-writing-services', name: 'CV Writing'},
    {id: 'thesis-writing-services', name: 'Thesis Proposal'},
    {id: 'case-study-writing', name: 'Case Study'},
    {id: 'book-movie-review-services', name: 'Movie Review'},
    {id: 'cv-editing-services', name: 'CV Editing'},
    {id: 'writing-an-essay-outline', name: 'Outline'},
    {id: 'write-my-essay', name: 'Write My Essay'},
    {id: 'lab-report-abstract', name: 'Lab Report'},
    {id: 'article-writing-services', name: 'Article Review'},
    {id: 'blog-writers-for-hire', name: 'Blog Writing'},
    {id: 'research-article-summary', name: 'Research Summary'},
    {id: 'powerpoint-presentation-service', name: 'PowerPoint'},
    {id: 'report-writing-service', name: 'Report'},
    {id: 'services', name: 'Full Service List'},
  ]
  
  selectService(service) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['', service]);
    });
    this.closePanel();
  }

  // add box shadows to header when scrolled by adding 'active' class
  isHeaderScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let condi = (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1);
    this.isHeaderScrolled = (condi) ? true : false;
  }

  toAppStore() {
    window.location.href = "https://apps.apple.com/us/app/cheapest-custom-writing-papers/id1447217562"
  }
  toGooglePlay() {
    window.location.href = "https://play.google.com/store/apps/details?id=com.cheapestessay.service"
  }
  openBlog() {
    window.location.href = "https://blog.cheapestessay.com"
  }
}