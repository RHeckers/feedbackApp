import { Component, OnInit } from '@angular/core';
import { FeedBackServiceService } from '../../services/feed-back-service.service';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-company-questions',
  templateUrl: './company-questions.component.html',
  styleUrls: ['./company-questions.component.css']
})
export class CompanyQuestionsComponent implements OnInit {

  questions: Question[];

  constructor(
    private feedbackService: FeedBackServiceService
  ) {
    this.getQuestions();
   }

  ngOnInit() { 
  }

  getQuestions(): void {
    this.feedbackService.getCompanyQuestions()
      .subscribe(questions => this.questions = questions);
  }

}
