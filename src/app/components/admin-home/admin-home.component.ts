import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('adminHomeContainer').style.height = (window.innerHeight - 30) - ((window.innerHeight/100) * 17) + 'px';
  }

}
