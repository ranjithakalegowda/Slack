import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
 // form: FormGroup;

  // @ViewChild('f') form:NgForm;

  // constructor(private router : Router, 
  //   private authService : AuthService,
  //   private fb: FormBuilder) {
  //     this.form = fb.group({
  //       email   : [],
  //       password: []
  //     });
  //    }
  constructor(private router : Router, 
    private authService : AuthService){}

  ngOnInit() {
  }


  // login(){
  //   const data = this.form.value;
  //   this.authService.login(data.email, data.password);
  //   this.email = this.password = ' ';

  // }

  onSignin(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password);
  }

  register(){
    this.router.navigate(['/register']);
  }
}
