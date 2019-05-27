import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private router : Router, 
    private authService : AuthService){}

  ngOnInit() {
  }

  onSignin(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.login(email, password);
    this.authService.login(email,password);
  }

  register(){
    this.router.navigate(['/register']);
  }
}
