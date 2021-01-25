import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Privacy Policy - Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "We request our visitors to read the privacy policy thoroughly and we make sure that every detail has been approved by it before sharing and utilizing it." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "privacypolicy" },
    );
  }

}
