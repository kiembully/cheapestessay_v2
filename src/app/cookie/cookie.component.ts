import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor() { }

  isCookieAnnouncementVisible:boolean;
  ngOnInit(): void {
  }

  hideCookieBar() {
    this.isCookieAnnouncementVisible = false;
    localStorage.setItem('cookie_bar_visibility','false')
  }

  isCookeBannerDisplayed() {
    return (!localStorage.getItem('cookie_bar_visibility')) ? true : false
  }
  
}
