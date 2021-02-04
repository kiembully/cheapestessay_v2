import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {

  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  isSaveCardChecked: boolean = true;

  backToPayout(id) {
    this.router.navigate(['/stripe-checkout', id]);
  }

}
