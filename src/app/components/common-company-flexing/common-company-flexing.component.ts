import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { service_object } from 'src/app/data/data'

@Component({
  selector: 'app-common-company-flexing',
  templateUrl: './common-company-flexing.component.html',
  providers: [service_object],
  styleUrls: ['./common-company-flexing.component.css']
})
export class CommonCompanyFlexingComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: service_object,
  ) {}
  
  services: any = this._service.service;
  ngOnInit(): void {
  }

  getCTA() {
    let url = this.route.snapshot.paramMap.get('id');
    let filtered = this.services.filter(function(el){
      return el.name == url
    })
    return filtered[0]
  }

}
