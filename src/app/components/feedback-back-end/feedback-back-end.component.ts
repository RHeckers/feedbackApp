import { Component, OnInit } from '@angular/core';
import { FeedBackServiceService } from '../../services/feed-back-service.service';
import { Feedback } from '../../interfaces/feedback';

@Component({
  selector: 'app-feedback-back-end',
  templateUrl: './feedback-back-end.component.html',
  styleUrls: ['./feedback-back-end.component.css']
})
export class FeedbackBackEndComponent implements OnInit {

  feedBacks: Feedback[];
 
  constructor(
    private feedbackService: FeedBackServiceService
  ) { }

  ngOnInit() { 
    this.getFeedback(); 
    setTimeout(() => {
      console.log(this.feedBacks)
    }, 1000);
  }
 
  getFeedback(): void {
    this.feedbackService.getFeedback()
      .subscribe(feedback => this.feedBacks = feedback);
  }

}  
