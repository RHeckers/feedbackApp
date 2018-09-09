import { Component, OnInit } from '@angular/core';
import { FeedBackServiceService } from '../../services/feed-back-service.service';
import { Feedback } from '../../interfaces/feedback';

import {TweenMax, Power2, TimelineLite} from "gsap";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedBacks: Feedback[];
  readMoreBtnTitle: string;

 
  constructor(
    private feedbackService: FeedBackServiceService
  ) { }

  ngOnInit() { 
    this.getFeedback(); 
    this.readMoreBtnTitle = "Read More";
    
  }

  showFeedbackBody(feedback, e){
    
    let feedbackToShow = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    let readMoreBtn = e.target.nextElementSibling;

    if(feedbackToShow == null){
      feedbackToShow = e.target.nextElementSibling.nextElementSibling;
      readMoreBtn = e.target;
    }
   
    if(feedbackToShow.style.display == 'block'){
      readMoreBtn.innerHTML = "Read More";
      TweenMax.to(feedbackToShow, 0.3, {opacity: 0, onComplete: function(){
        feedbackToShow.style.display = 'none';
      }});
    }else{
      feedbackToShow.style.display = 'block';
      TweenMax.to(feedbackToShow, 0.5, {delay: 0.1, opacity: 1});
      readMoreBtn.innerHTML = "Hide";
    }
    

  }
 
  getFeedback(): void {
    this.feedbackService.getFeedback()
      .subscribe(feedback => this.feedBacks = feedback);
  } 

}
