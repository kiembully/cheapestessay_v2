import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-free-quote',
  templateUrl: './free-quote.component.html',
  styleUrls: ['./free-quote.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FreeQuoteComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Essay Writing Prices - Get a Free Quote Now");
    this.metaTagService.updateTag(
      { name: 'description', content: "Looking for academic writing help? Get a free quote and hire an expert writer at affordable essay writing prices. Visit us or call at +1 (909) 441-1414." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "free quote, discounts" },
    );
  }

}
