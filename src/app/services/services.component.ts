import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from 'src/app/api.service';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private _auth: ApiServices,
    private titleService: Title,
    private metaTagService: Meta,
    public sanitized: DomSanitizer
  ) { }
  

  isInitializing: boolean = false;
  ngOnInit(): void {
    this.initializeService();
    this.titleService.setTitle("Paper Writing Services | Essay Help Online– Cheapest Essay");
    this.metaTagService.updateTag(
      { name: 'description', content: "Cheapest Essay offers the most professional paper writing service at the best price. You need essay help online? We are here for your academic assistance!" },
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: "article writing service providers, best seo article writing service, quality article writing service, research paper writing help, professional paper writers, professional paper writing service, coursework help service, academic writing help, professional writing services, professional coursework writing service, dissertation editing services, dissertation help service, professional dissertation writers, professional dissertation help, resume writing services, professional resume writers, english proofreading online, best proofreading services, proofreading services online, powerpoint presentation services, professional powerpoint presentation services, powerpoint expert" },
    );
  }

  initializeService() {
    this.setSelectedService('essay-writing-services');
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
    })
  }

}
