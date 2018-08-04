import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer;

  constructor() { }

  ngOnInit() {
    this.footer = document.getElementById('footer');
    console.log();

    this.footer.style.height = (window.innerHeight / 100) * 6 + 'px'
    this.footer.style.marginTop = (window.innerHeight / 100) * 1.5 + 'px'
  } 

}
