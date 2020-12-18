import { Component } from '@angular/core';
import { user_functions } from '../app/data/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [user_functions]
})
export class AppComponent {
  title = 'Cheapest Essay';
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
    'pricing'
  ]

  getFooterStatus() {
    let path = this.new_user_functions.getCurrentPath();
    let routes = this.routerWithFooter;
    let state = false;
    state = (routes.indexOf(path) > -1) ? true : false;
    return state;
  }
}
