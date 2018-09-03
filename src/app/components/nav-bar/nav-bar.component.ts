import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navBar;

  constructor() { }

  ngOnInit() { 
    this.navBar = document.getElementById('navBar');
    console.log(document.body.clientHeight, document.body.offsetHeight, document.body.scrollHeight);
    this.navBar.style.height = window.innerHeight + 'px';
  }
}
