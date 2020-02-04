import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  products = [
    {"id":1,
    "name":"Lucy",
     "position":"CEO",
     "Image": "./assets/Images/user.jpg",
     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet est id.",
    },
    {"id":2,
    "name":"Lizzie",
     "position":"COO",
     "Image": "./assets/Images/user.jpg",
     "description": "Maecenas condimentum eget dolor eget porta. Aenean vestibulum eu est sed gravida."
    },
    {"id":3,
    "name":"John",
     "position":"CFO",
     "Image": "./assets/Images/user.jpg",
     "description": "Curabitur vel tincidunt velit. Vestibulum quis erat magna. Curabitur vitae sollicitudin erat.",
    },
];
  constructor() { }

  ngOnInit() {
  }

}
