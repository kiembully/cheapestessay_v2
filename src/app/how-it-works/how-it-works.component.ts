import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HowItWorksComponent implements OnInit {
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Know How Cheapest Essay Works On Writing Services');
    this.metaTagService.updateTag(
      { name: 'description', content: "This webpage helps to know how Cheapest Essay works on writing services. Here is video available to guide place new order. Get the best result on given deadline." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "Best article writing service, article rewriting service, article writing company, professional article writing services, high quality article writing service, best seo article writing service, professional article writers, article writing websites, quality article writing service, article writers needed, best seo article writing service, quality article writing service, unique article writer, blog article writers, content and article writing service, dissertation writing help, professional dissertation writers, professional paper writing service" },
    );
  }

}
