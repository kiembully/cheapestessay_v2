import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from 'src/app/api.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  providers: [ApiServices],
  styleUrls: ['./services-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _auth: ApiServices,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    // detects changes thru dynamic router
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.initializeService();
      }
    });
  }

  public service_id:any;
  ngOnInit(): void {
    this.initializeService();
  }

  initializeService() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service_id = id;
    this.setSelectedService(this.service_id);
  }

  initial_content:any;
  service_name: any;
  initial_pitch_header:any;
  initial_pitch_content:any;
  main_header:any;
  setSelectedService(id) {
    this._auth.getService(id).subscribe(res=>{
      console.log(res);
      this.service_name = res.data.name;
      this.initial_content = res.data.initial_content;
      this.initial_pitch_header = res.data.initial_pitch_header;
      this.initial_pitch_content = res.data.initial_pitch_content;
      this.main_header = res.data.main_header;

      this.titleService.setTitle(res.data.title);
      this.metaTagService.updateTag(
        { name: 'description', content: res.data.servicesdescription },
      );
      this.metaTagService.updateTag(
        { name: 'keywords', content: res.data.keywords },
      );
    })
  }

}
