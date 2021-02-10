import { Component } from '@angular/core';
import { user_functions } from '../app/data/user-data';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [user_functions]
})
export class AppComponent {

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router
  ) { }
  
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
  }
  
  new_user_functions = new user_functions;
  routerWithFooter:any = [
    '',
    'how-it-works',
    'about-us',
    'revision-policy',
    'privacy-policy',
    'terms-of-use',
    'faqs',
    'money-back-guarantee',
    'guarantees',
    'pricing',
    'contact-us',
    'services',
    'what-we-do',
    'arabic',
    'disclaimer'
  ]

  getFooterStatus() {
    let path = this.new_user_functions.getCurrentPath();
    let routes = this.routerWithFooter;
    let state = false;
    state = (routes.indexOf(path) > -1 || path.toString().includes('services')) ? true : false;
    return state;
  }
  
}
