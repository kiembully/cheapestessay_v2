import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html', 
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Add Card - Stripe | CheapestEssay");
    this.metaTagService.updateTag(
      { name: 'description', content: "None" },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "None" },
    );
  }

}
