import { Component, OnInit } from '@angular/core';
import { FeedBackServiceService } from '../../services/feed-back-service.service';
import { Feedback } from '../../interfaces/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedBacks: Feedback[];
 
  constructor(
    private feedbackService: FeedBackServiceService
  ) { }

  ngOnInit() { 
    this.getFeedback(); 
  }
 
  getFeedback(): void {
    this.feedbackService.getFeedback()
      .subscribe(feedback => this.feedBacks = feedback);
  }

}
