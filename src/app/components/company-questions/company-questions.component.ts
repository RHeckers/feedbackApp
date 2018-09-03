import { Component, OnInit } from '@angular/core';
import { FeedBackServiceService } from '../../services/feed-back-service.service';
import { Question } from '../../interfaces/question';

import {TweenMax, Power2, TimelineLite} from "gsap";

@Component({
  selector: 'app-company-questions',
  templateUrl: './company-questions.component.html',
  styleUrls: ['./company-questions.component.css']
})
export class CompanyQuestionsComponent implements OnInit {

  questions: Question[];
  readMoreBtnTitle: string;

 
  constructor(
    private feedbackService: FeedBackServiceService
  ) { }

  ngOnInit() { 
    this.getQuestions(); 
    this.readMoreBtnTitle = "Read More";
    
  }

  showQuestionBody(question, e){
    
    let questionToShow = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    let readMoreBtn = e.target.nextElementSibling;

    if(questionToShow == null){
      questionToShow = e.target.nextElementSibling.nextElementSibling;
      readMoreBtn = e.target;
    }
   
    if(questionToShow.style.display == 'block'){
      readMoreBtn.innerHTML = "Read More";
      TweenMax.to(questionToShow, 0.3, {opacity: 0, onComplete: function(){
        questionToShow.style.display = 'none';
      }});
    }else{
      questionToShow.style.display = 'block';
      TweenMax.to(questionToShow, 0.5, {delay: 0.1, opacity: 1});
      readMoreBtn.innerHTML = "Hide";
    }
    

  }
 

  getQuestions(): void {
    this.feedbackService.getCompanyQuestions()
      .subscribe(questions => this.questions = questions);
  }

}
