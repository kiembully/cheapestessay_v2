import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-guarantees',
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GuaranteesComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Guarantees - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Our writing and editing services guarantee is individual and invincible. We challenge after reading our policies you perceive rest full about working with us." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "unique article writer, blog article writers, content and article writing service, online research paper writing service, professional cv writing service, essay proofreading service" },
    );
  }

}
