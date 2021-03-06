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

  schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Cheapest Essay',
    url: 'https://angular.io',
    description: "Looking for the cheapest essay writing service Hire qualified essay writers, who will do your 'write my paper' requests. Save up to 15% on your first order.",
    logo: "https://d3se3mk07n7blr.cloudfront.net/assets/img/cheapestessay-icon.svg",
    image: "https://d3se3mk07n7blr.cloudfront.net/assets/img/cheapestessay-icon.svg",
    sameAs: [
      "https://www.facebook.com/CheapestEssay/",
      "https://twitter.com/CheapestEssay",
      "https://www.instagram.com/cheapestessay/"
    ],
    address: {
      "@type": "PostalAddress",
      "streetAddress": "Columbus Ohio",
      "postOfficeBoxNumber": "43229",
      "addressLocality": "Columbus",
      "addressRegion": "Ohio",
      "postalCode": "43229",
      "addressCountry": "USA"
    },
    openingHours: [ "Mon-Sun 00:00-23:59" ],
  };
  
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
      let popup = this._trigger;
      let path = this.new_user_functions.getCurrentPath();
      if (path != 'maintenance') {
        setTimeout(function(){
          popup.openAnnouncementDialog()
        },20000);
      }
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
    'maintenance',
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

  isMaintenance() {
    let path = this.new_user_functions.getCurrentPath();
    return (path=='maintenance') ? false : true;
  }
  
}
