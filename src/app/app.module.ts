import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './modules/router/router.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserMainSelectionComponent } from './components/user-main-selection/user-main-selection.component';
import { OpenQuestionComponent } from './components/open-question/open-question.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CompanyQuestionsComponent } from './components/company-questions/company-questions.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedbackBackEndComponent } from './components/feedback-back-end/feedback-back-end.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { CoreModule } from './auth/core.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserMainSelectionComponent,
    OpenQuestionComponent,
    CompanyQuestionsComponent,
    FooterComponent,
    FeedbackBackEndComponent,
    NotfoundComponent,
    AdminHomeComponent,
    MainLoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
