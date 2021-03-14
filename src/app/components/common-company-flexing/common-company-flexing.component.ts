import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { service_object } from 'src/app/data/data';
import { services_functions } from 'src/app/data/ui-services';

@Component({
  selector: 'app-common-company-flexing',
  templateUrl: './common-company-flexing.component.html',
  providers: [service_object, services_functions],
  styleUrls: ['./common-company-flexing.component.css']
})
export class CommonCompanyFlexingComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: service_object,
    public _fxServices: services_functions
  ) {}
  
  services: any = this._service.service;
  url:any = this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
  }

}
