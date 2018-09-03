import { Component, OnInit } from '@angular/core';
import { FeedBackServiceService } from '../../services/feed-back-service.service';
import { Compliment } from '../../interfaces/compliment';

import {TweenMax, Power2, TimelineLite} from "gsap";

@Component({
  selector: 'app-compliments',
  templateUrl: './compliments.component.html',
  styleUrls: ['./compliments.component.css']
})
export class ComplimentsComponent implements OnInit {

  compliments: Compliment[];
  readMoreBtnTitle: string;

 
  constructor(
    private complimentsService: FeedBackServiceService
  ) { }

  ngOnInit() { 
    this.getCompliments(); 
    this.readMoreBtnTitle = "Read More";
    
  }

  showcomplimentsBody(compliment, e){
    
    let complimentsToShow = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    let readMoreBtn = e.target.nextElementSibling;

    if(complimentsToShow == null){
      complimentsToShow = e.target.nextElementSibling.nextElementSibling;
      readMoreBtn = e.target;
    }
   
    if(complimentsToShow.style.display == 'block'){
      readMoreBtn.innerHTML = "Read More";
      TweenMax.to(complimentsToShow, 0.3, {opacity: 0, onComplete: function(){
        complimentsToShow.style.display = 'none';
      }});
    }else{
      complimentsToShow.style.display = 'block';
      TweenMax.to(complimentsToShow, 0.5, {delay: 0.1, opacity: 1});
      readMoreBtn.innerHTML = "Hide";
    }
    

  }
 
  getCompliments(): void {
    this.complimentsService.getCompliments()
      .subscribe(compliments => this.compliments = compliments);
  }

}
