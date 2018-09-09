import { Component, OnInit } from '@angular/core';
import { FeedBackServiceService } from '../../services/feed-back-service.service';
import { Feedback } from '../../interfaces/feedback';
import { Compliment } from '../../interfaces/compliment';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  feedBacks: Feedback[];
  questions: Question[];
  compliments: Compliment[];
  itemHolders: any;
 

  constructor(private feedbackService: FeedBackServiceService) { }

  ngOnInit() {
    this.getFeedback();
    this.getCompliments();
    this.getQuestion();

    this.itemHolders = document.querySelectorAll('.itemHolder');
    for(let i = 0; i < this.itemHolders.length; i++){
      let itemholder = this.itemHolders[i];
      itemholder.style.maxHeight = (window.innerHeight / 100) * 40 + 'px';
      itemholder.style.minHeight = (window.innerHeight / 100) * 40 + 'px';
      console.log(123)

    }

  }

  getFeedback(): void {
    this.feedbackService.getFeedback()
      .subscribe(feedback => this.feedBacks = feedback.splice(0, 10));
  } 
  getCompliments(): void {
    this.feedbackService.getCompliments()
      .subscribe(compliment => this.compliments = compliment.splice(0, 10));
  } 
  getQuestion(): void {
    this.feedbackService.getCompanyQuestions()
      .subscribe(question => this.questions = question.splice(0, 10));
  } 

}
 