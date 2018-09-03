import { Injectable } from '@angular/core';
import { Feedback } from '../interfaces/feedback';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../interfaces/question';
import { Compliment } from '../interfaces/compliment';

@Injectable({
  providedIn: 'root'
})
export class FeedBackServiceService {

  feedbackCollection: AngularFirestoreCollection<Feedback>;
  feedbackDoc: AngularFirestoreDocument<Feedback>;
  complimentsCollection: AngularFirestoreCollection<Compliment>;
  complimentDoc: AngularFirestoreDocument<Compliment>;
  companyQuestionCollection: AngularFirestoreCollection<Question>;
  companyQuestionDoc: AngularFirestoreDocument<Question>;
  allFeedback: Observable<Feedback[]>;
  allCompliments: Observable<Compliment[]>;
  feedback: Observable<Feedback>;
  compliment: Observable<Compliment>;
  companyQuestions: Observable<Question[]>;
  companyQuestion: Observable<Question>;

  constructor(
    private asf: AngularFirestore
  ) {
    this.getFeedback();
    this.getCompanyQuestions();
    this.getCompliments();
   }

   getCompanyQuestions (): Observable<Question[]> {
    this.companyQuestionCollection = this.asf.collection<Question>('/companyQuestions');
    this.companyQuestions = this.companyQuestionCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Question;
      const id = a.payload.doc.id;
      return { id, ...data };
      });
    }));
    
    return this.companyQuestions;
  }

  getFeedback (): Observable<Feedback[]> {
    this.feedbackCollection = this.asf.collection<Feedback>('/feedback');
    this.allFeedback = this.feedbackCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Feedback;
      const id = a.payload.doc.id;
      return { id, ...data };
      });
    }));
    return this.allFeedback;
  }

  getCompliments(): Observable<Compliment[]> {
    this.complimentsCollection = this.asf.collection<Compliment>('/compliments');
    this.allCompliments = this.complimentsCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Compliment;
      const id = a.payload.doc.id;
      return { id, ...data };
      });
    }));
    return this.allCompliments
  }

  addCompliment(compliment: Compliment){
    this.feedbackCollection.add(compliment);

  }


  addFeedBack(feedback: Feedback){
    this.feedbackCollection.add(feedback);

  }
}
