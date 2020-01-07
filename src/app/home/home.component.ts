import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  userDisplayName = '';
    ngOnInit() {
       this.userDisplayName = sessionStorage.getItem('username');
    }

}
