import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  loginForm: HTMLElement;

  constructor(public auth: AuthService ) { } 

  ngOnInit() {
    setTimeout(() => {
      this.loginForm = document.getElementById('loginForm');
      console.log(this.loginForm)
      this.loginForm.style.height = window.innerHeight * 0.31 + 'px'
    }, 100);
    
    
  }

  login(email, password) {
    console.log(email, password)
    this.auth.login(email.value, password.value);   
  }

}
