import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  constructor(public auth: AuthService ) { } 

  ngOnInit() {
    
  }

  login(email, password) {
    console.log(email, password)
    this.auth.login(email.value, password.value);   
  }

}
