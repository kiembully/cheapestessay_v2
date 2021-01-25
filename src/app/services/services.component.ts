import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent implements OnInit {
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Paper Writing Services | Essay Help Online– Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Cheapest Essay offers the most professional paper writing service at the best price. You need essay help online? We are here for your academic assistance!" },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "article writing service providers, best seo article writing service, quality article writing service, research paper writing help, professional paper writers, professional paper writing service, coursework help service, academic writing help, professional writing services, professional coursework writing service, dissertation editing services, dissertation help service, professional dissertation writers, professional dissertation help, resume writing services, professional resume writers, english proofreading online, best proofreading services, proofreading services online, powerpoint presentation services, professional powerpoint presentation services, powerpoint expert" },
    );
  }

}
