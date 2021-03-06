import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CompanyQuestionsComponent } from "../../components/company-questions/company-questions.component";
import { FeedbackBackEndComponent } from '../../components/feedback-back-end/feedback-back-end.component';
import { OpenQuestionComponent } from '../../components/open-question/open-question.component';
import { UserMainSelectionComponent } from '../../components/user-main-selection/user-main-selection.component';
import { NotfoundComponent } from '../../components/notfound/notfound.component';
import { AdminHomeComponent } from '../../components/admin-home/admin-home.component';
import { MainLoginComponent } from '../../components/main-login/main-login.component';
import { FeedbackComponent } from '../../components/feedback/feedback.component';
import { ComplimentsComponent } from '../../components/compliments/compliments.component';

const routes: Routes = [
  {path: 'company-questions', component: CompanyQuestionsComponent},
  {path: 'feedback-adminPanel', component: FeedbackBackEndComponent},
  {path: 'add-feedback', component: OpenQuestionComponent},
  {path: 'admin-home', component: AdminHomeComponent},
  {path: 'login', component: MainLoginComponent},
  {path: '', component: MainLoginComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'compliments', component: ComplimentsComponent},
  {path: '**', component: NotfoundComponent}
]; 


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
