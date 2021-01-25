import { Component, OnInit, HostListener } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import {user_functions} from '../../data/user-data';
import { Router, Event, NavigationEnd } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { loggedin_session } from '../../data/ui-services';
import {MatSidenav} from '@angular/material/sidenav';

// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [loggedin_session],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // setting up users status and other data 
  new_user_functions = new user_functions;
  isUserOnline:number;
  current_path:string;

  decoded_user_token:any;
  headerForm = new FormGroup({
    first_name: new FormControl('User Firstname'),
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
        email: this.decoded_user_token.user_details.user_email,
        balance: this.decoded_user_token.account.total_balance,
      })
    }
  }

  content_id: number;
  // important note
  // if content_id's assigned value is 0, the dialog box will display user-entry component

  isHeaderVisible(path:string, user_status:number) {
    let state:boolean;
    if ((path == 'order') || (this.new_user_functions.getCurrentPath().includes('my-orders') == true) || (this.new_user_functions.getCurrentPath().includes('edit-order') == true) || (path == 'profile') || (path == 'balance') || (path == 'discount') || path == 'level' || (path == 'order-details')) {
      state = (user_status == 0) ? state = true : state = false;
    } else {
      state = true;
    }
    return state;
  }

  // check which header is visible
  isProfileHeaderVisible(path:string, user_status:number) {
    let state:boolean;
    if ((path == 'order') || (this.new_user_functions.getCurrentPath().includes('my-orders') == true) || (this.new_user_functions.getCurrentPath().includes('edit-order') == true) || (path == 'profile') || (path == 'balance') || (path == 'discount') || path == 'level' || (path == 'order-details')) {
      state = (user_status == 0) ? state = false : state = true;
    } else {
      state = false;
    }
    return state;
  }

  openLogoutDialog() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      minHeight: '200px',
      maxHeight:'349px',
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
  isMobileNavActive = false;
  toggleMobileMenu() {
    this.isMobileNavActive = !this.isMobileNavActive;
    console.log('asdasdasd')
  }
  closePanel() {
    this.isMobileNavActive = false
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

  selectService(service) {
    this.router.navigate(['/services', service]);
    this.togglePanel();
  }

  // add box shadows to header when scrolled by adding 'active' class
  isHeaderScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let condi = (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1);
    this.isHeaderScrolled = (condi) ? true : false;
  }
}