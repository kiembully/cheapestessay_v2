import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Terms of Use - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Please read Terms of Use carefully before ordering an essay on our site to protect yourself. You can check order revisions and refund policies all in one place." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "termofuse" },
    );
  }

}
