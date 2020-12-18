import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level-page-modal',
  templateUrl: './level-page-modal.component.html',
  styleUrls: ['./level-page-modal.component.css']
})
export class LevelPageModalComponent implements OnInit {

  @Input() public level: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  getCurrentLevel(level) {
    let state:any;
    switch(level.toLowerCase()) {
      case 'vip':
        state = 3;
        break;
      case 'gold':
        state = 2;
        break;
      case 'silver':
        state = 1;
        break;
      default:
        state = 0;
    }
    return state;
  }

}
