import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { ApiServices } from 'src/app/api.service';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { service_object } from 'src/app/data/data';
import { services_functions } from 'src/app/data/ui-services';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css'],
  providers: [ApiServices, service_object, services_functions],
  encapsulation: ViewEncapsulation.None,
})

export class ServicesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _auth: ApiServices,
    private titleService: Title,
    private metaTagService: Meta,
    public sanitized: DomSanitizer,
    private _service: service_object,
    public _fxServices: services_functions
  ) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.initializeService()
      }
    })
    
  }

  isInitializing: boolean = false;
  services: any = this._service.service;
  child_services: any = this._service.similarities;
  url:any = this.route.snapshot.paramMap.get('id')
  ngOnInit(): void {
  }

  initializeService() {
    this.setSelectedService(this.url);
  }

  initial_content:any;
  service_name: any;
  initial_pitch_header:any;
  initial_pitch_content:any;
  faq_entry:any;
  main_header:any;
  sub_header:any;
  sub_content:any;
  sub_content_list:any;
  left_column:any = [];
  right_column:any = [];
  row_total: any;
  row_filler:any = [];
  setSelectedService(id) {
    this._auth.getService(id).subscribe(res=>{
      if (res.status) {
        console.log(res);
        this.setSeo(this.url)
        this.service_name = res.data.page_contents.name;
        this.initial_content = res.data.page_contents.initial_content;
        this.initial_pitch_header = res.data.page_contents.initial_pitch_header;
        this.initial_pitch_content = res.data.page_contents.initial_pitch_content;
        this.main_header = res.data.page_contents.main_header;
        this.sub_header = res.data.sub_contents[0].header;
        this.sub_content = res.data.sub_contents[0].content;
        this.sub_content_list = res.data.sub_contents;
        this.faq_entry = res.data.faq;

        for (let i = 1; i < res.data.sub_contents.length; i++) {
          if (i%2 != 0) {
            this.left_column.push(res.data.sub_contents[i])
          } else {
            this.right_column.push(res.data.sub_contents[i])
          }
        }
        this.row_total = Math.floor((res.data.sub_contents.length - 1) / 2);
        this.row_filler = Array(this.row_total).fill(1).map((x,i)=>i)
        this.isInitializing = true;
      } else {
        // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        //   this.router.navigate(['/404'])
        // });
      }
    })
  }
  setSeo(id){
    this._auth.getSeo(id).subscribe(res=>{
      this.titleService.setTitle(res.data.title);
      this.metaTagService.updateTag(
        { name: 'description', content: res.data.description },
      );
      this.metaTagService.updateTag(
        { name: 'keywords', content: res.data.keywords },
      );
    })
  }

  isServiceChild() {
    let url = this.url;
    let filtered = this.child_services.filter(function(el){
        return el.service == url;
    })
    return filtered[0]
  }

  getParentService() {
    if (this.isServiceChild() != null) {
      let id = this.isServiceChild().id;
      switch (id) {
        case 1: {return 'Essay Writing Services'}
        case 3: {return 'Research Paper Writing Services'}
        case 25: {return 'Coursework Writing Services'}
        case 8: {return 'Case Study Writing'}
        case 9: {return 'Assignment Writing Service'}
      }
    }
  }

  getParentServiceLink() {
    if (this.isServiceChild() != null) {
      let link = this.getParentService().toLowerCase();
      return '/' + link.replace(/\s/g, "-")
    }
  }

}
