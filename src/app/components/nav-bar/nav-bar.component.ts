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
    // console.log(this.navBar);
    // this.navBar.style.height = (window.innerHeight/100) * 12 + 'px';
  }
}
