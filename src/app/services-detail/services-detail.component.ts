import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { ApiServices } from 'src/app/api.service';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})

export class ServicesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _auth: ApiServices,
    private titleService: Title,
    private metaTagService: Meta,
    public sanitized: DomSanitizer
  ) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.initializeService()
      }
    })
    
  }

  isInitializing: boolean = false;
  ngOnInit(): void {
    this.initializeService();
  }

  initializeService() {
    this.setSelectedService(this.route.snapshot.paramMap.get('id'));
  }

  initial_content:any;
  service_name: any;
  initial_pitch_header:any;
  initial_pitch_content:any;
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
        this.setSeo(this.route.snapshot.paramMap.get('id'))
        this.service_name = res.data.page_contents.name;
        this.initial_content = res.data.page_contents.initial_content;
        this.initial_pitch_header = res.data.page_contents.initial_pitch_header;
        this.initial_pitch_content = res.data.page_contents.initial_pitch_content;
        this.main_header = res.data.page_contents.main_header;
        this.sub_header = res.data.sub_contents[0].header;
        this.sub_content = res.data.sub_contents[0].content;
        this.sub_content_list = res.data.sub_contents;

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
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/404'])
        });
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

}
