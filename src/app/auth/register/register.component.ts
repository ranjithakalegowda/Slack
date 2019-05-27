import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ViewChild('f') form:NgForm;

  email:string;
  password:string;

  constructor(private authService : AuthService,
    private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form);
    const email  = form.value.email;
    const password = form.value.password;
    this.authService.signup(email, password);
    this.router.navigate(['/home'])
  }

}
