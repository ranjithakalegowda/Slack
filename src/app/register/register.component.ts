import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ViewChild('f') form:NgForm;

  email:string;
  password:string;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form);
    const email  = form.value.email;
    const password = form.value.password;
    this.authService.signup(email, password);
  }

  // signup(){
  //   this.authService.signup(this.email, this.password);
  //    this.email = this.password = '';
  // }

}
