import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Order Essay Online -  Hire our Professional Writers Now!");
    this.metaTagService.updateTag(
      { name: 'description', content: "Order Online if you are tired of endless article & essay papers. Visit Cheapest Essay and place your order now! For assistance, call at +1 (909) 441-1414." },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "Order essay online" },
    );
  }
  
}
