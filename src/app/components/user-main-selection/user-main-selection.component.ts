import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-main-selection',
  templateUrl: './user-main-selection.component.html',
  styleUrls: ['./user-main-selection.component.css']
})
export class UserMainSelectionComponent implements OnInit {

  questionBoxes: NodeList;
  questionBox: any;
  questionBoxText: string;

  constructor() { }

  ngOnInit() {
    this.questionBoxes = document.querySelectorAll('.mainQuestion'); 
    
    for(let i = 0; i < this.questionBoxes.length; i++){
      this.questionBox = this.questionBoxes[i];
      this.questionBox.style.height = (window.innerHeight / 100) * 65 + 'px';
      this.questionBox.style.marginTop = (window.innerHeight / 100) * 7 + 'px';
      this.questionBox.style.marginBottom = (window.innerHeight / 100) * 8.2 + 'px';

    }




  }

}
