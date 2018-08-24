import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Feedback } from '../../interfaces/feedback';

import { FeedBackServiceService } from '../../services/feed-back-service.service';

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.css']
})
export class OpenQuestionComponent implements OnInit {

  pagetitle = 'GIVE ANONYMOUS FEEDBACK';
  date: any;

  constructor(
    private feedbackService: FeedBackServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  add(title: string, category: string, feedback: string ): void {
    title = title.trim();
  
    if (!title || !feedback) { return; }    
    this.feedbackService.addFeedBack({ title, category, feedback } as Feedback);
    this.router.navigate(['/feedback']);
    // this.location.go('/userAccount/');?
  }

}
