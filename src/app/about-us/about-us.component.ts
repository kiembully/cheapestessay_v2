import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("About Company | Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Cheapest Essay provides the top level writing and editing services at a reasonable price. We have the best content writer to write your views artistically." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "professional paper writing service, professional research paper writers, best professional resume writers, resume writing services cost, coursework assistance, paper proofreading service, writing proofreading, professional powerpoint services" },
    );
  }
}
