import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-links',
  templateUrl: './floating-links.component.html',
  styleUrls: ['./floating-links.component.css']
})
export class FloatingLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ishovered:any = false;
  hoverSocialLinks() {
    this.ishovered = true;
  }
  hoverOutSocialLinks() {
    this.ishovered = false;
  }

}
