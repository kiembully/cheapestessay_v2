import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-revision-policy',
  templateUrl: './revision-policy.component.html',
  styleUrls: ['./revision-policy.component.css']
})
export class RevisionPolicyComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Revision Policy - Order Custom Writing Services");
    this.metaTagService.updateTag(
      { name: 'description', content: "Cheapest Essay is a very responsible and reliable company and customer satisfaction is a topmost priority so we will revise your work but please check all terms." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "revision policy" },
    );
  }

}
