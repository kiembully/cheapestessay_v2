import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import {new_order_form_default} from 'src/app/data/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ApiServices, new_order_form_default],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent implements OnInit {

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

}
