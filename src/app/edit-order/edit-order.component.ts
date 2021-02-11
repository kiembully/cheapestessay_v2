import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor() { }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    let state: boolean;
    state = (localStorage.getItem('is_submitting') === 'true') || (localStorage.getItem('file_update') === 'true') ? true : false;
    localStorage.removeItem('is_submitting');
    localStorage.removeItem('file_update');
    return state;
  }
  
  ngOnInit(): void {
  }

}
