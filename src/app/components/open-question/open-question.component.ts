import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Feedback } from '../../interfaces/feedback';

import { FeedBackServiceService } from '../../services/feed-back-service.service';

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.css']
})
export class OpenQuestionComponent implements OnInit {

  pagetitle = 'Give Feedback to your Employer';

  constructor(
    private feedbackService: FeedBackServiceService
  ) { }

  ngOnInit() {
  }

  add(title: string, category: string, feedback: string ): void {
    title = title.trim();
  
    console.log(title, feedback, category);
    if (!title || !feedback) { return; }
    this.feedbackService.addFeedBack({ title, category, feedback } as Feedback);
    // this.location.go('/userAccount/');?
  }

}
