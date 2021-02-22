import { Component } from '@angular/core';
import { user_functions } from '../app/data/user-data';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { DialogTriggers } from '../app/data/ui-services'
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [user_functions, DialogTriggers]
})
export class AppComponent {

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    public dialog: MatDialog,
    public _trigger: DialogTriggers,
    private route: ActivatedRoute,
  ) {

  }
  // popup = this._trigger.openAnnouncementDialog();
  ngOnInit() {
    this.titleService.setTitle("Cheapest Essay Writing Service by Qualified Essay Writers $8/page");
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Cheapest essay writing service, write my paper, paper writing service, professional paper writing service, academic writing services, professional writing services, cheapest writing services, professional writers, cheap writing services, cheap essay writing services, essay writing service cheapest, writing paper service, professional essay writers, essay writers, online writing services,  affordable writing service' },
      { name: 'description', content: "Looking for the cheapest essay writing service Hire qualified essay writers, who will do your 'write my paper' requests. Save up to 15% on your first order." },
      { name: 'robots', content: 'index, follow' },
    ]);

    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });

    // display popup announcment
    const token = localStorage.getItem('user_token');
    let status = (!token);
    if (status) {
      let popup = this._trigger
      setTimeout(function(){
        popup.openAnnouncementDialog()
       },20000);
    }
  }
  
  new_user_functions = new user_functions;

  routerWithNoFooter: any = [
    'order',
    'my-orders',
    'profile',
    'balance',
    'discount',
    'level',
    'order-details',
    'edit-order',
    'stripe-checkout',
    'update-card',
    'invoice',
    '404',
  ]

  getFooterStatus() {
    let path = this.new_user_functions.getCurrentPath().replace(/\//g, ' ');
    let new_path = path.split(" ");
    let routes = this.routerWithNoFooter;

    for (let i = 0; i < this.routerWithNoFooter.length - 1; i++) {
      if (this.routerWithNoFooter.includes(new_path[0], i)) {
        return false;
      } else {
        return true
      }
    }
  }
  
}
