import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import {new_order_form_default} from 'src/app/data/data';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css'],
  providers: [ApiServices, new_order_form_default],
  encapsulation: ViewEncapsulation.None,
})
export class WhatWeDoComponent implements OnInit {

  servicesForm = new FormGroup({
    paper: new FormControl(1),
    email: new FormControl('')
  })
  
  constructor(private _auth: ApiServices, private _data: new_order_form_default, private router: Router) { }

  pPapers: any;
  oPapers: any;
  setPapers() {
    this._auth.getPapers().subscribe(res=>{
      this.pPapers = res[0].data;
      this.oPapers = res[1].data;
    })
  }

  ngOnInit(): void {
    this.setPapers();
  }

  orderWritten: OwlOptions = {
    loop: false,
    dots: true,
    margin: 0,
    dotsEach: true,
    startPosition: 1,
    nav: false,
    center:true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      }
    },
  }

}
