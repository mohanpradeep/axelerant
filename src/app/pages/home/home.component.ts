import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products = [
    {"id":1,"name":"Service Name","Image": "./assets/Images/staffing-icon-2.png"},
    {"id":2,"name":"Service Name","Image": "./assets/Images/stock-vector-technical.png"},
    {"id":3,"name":"Service Name", "Image": "./assets/Images/folder_sans_settings-128.png"},
];
  constructor() { }

  ngOnInit() {
  }

}
