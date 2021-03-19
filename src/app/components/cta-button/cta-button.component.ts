import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { services_functions } from 'src/app/data/ui-services';
import { service_object } from 'src/app/data/data';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  templateUrl: './cta-button.component.html',
  providers: [service_object,services_functions],
  styleUrls: ['./cta-button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CtaButtonComponent implements OnInit {

  @Input() public customCTA: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: service_object,
    public _fxServices: services_functions
  ) { }

  services: any = this._service.service;
  url:any = this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    
  }

  destination: any = '';
  getCtaText() {
    if (this.customCTA == null) {
      return this._fxServices.getCTA(this.url,this.services) != null ? this._fxServices.getCTA(this.url,this.services).cta[0].text : 'Write My Paper'
    } else {
      return this.customCTA
    }
  }

  getUrl(text) {
    return (text == 'Get Free Quote') ? '/free-quote' : '/order';
  }

}
