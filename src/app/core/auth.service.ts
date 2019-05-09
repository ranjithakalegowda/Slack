import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  token:string;

  user: Observable<firebase.User>;

  constructor(private af: AngularFireAuth, private router : Router) {
    // af.authState.subscribe((auth) => {
    //   this.user = auth;
    // });

    this.user = af.authState;
  }

  // registerUser(email: string, password: string) {
  //   this.af.auth.createUserWithEmailAndPassword(..)
  // }

  // loginUser(email: string, password: string) {
  //   this.af.auth.signInWithEmailAndPassword(...);
  // }

   async signup(email:string, password:string){
   await this.af
    .auth
    .createUserWithEmailAndPassword(email,password)
    .then(value => {
      console.log(email);
      console.log('success !', value);
    })
    .catch(err =>{
      console.log('something went wrong : ', err.message);
    });
  }

 
  login(email:string, password:string){
    this.af.auth.signInWithEmailAndPassword(email,password)
    .then(
      response =>{console.log(response);
        this.router.navigate(['/home']);
        this.af.auth.currentUser.getIdToken()
        .then(
          (token:string) => this.token = token
        )            
      }
    )
    .catch(error =>{
      console.log(error);
    })
  }

  getToken(){
    this.af.auth.currentUser.getIdToken()
    .then(
      (token:string) => this.token = token
    );
      return this.token;
  }

  logout(){
    this.af.auth.signOut().then(() =>{
      this.router.navigate(['']);
    })
    
  }

  isAuthenticated(){
    return this.token != null;
  }

//  login(email:string, password:string){
//  try{
//   const result =  this.af.auth.signInWithEmailAndPassword(email, password);
//   if(result){
//     console.log(result);
//     this.router.navigate(['/home']);
//   }
//  } 
//   catch(err){
//     console.log('something went wrong:' , err.message);
//     }
//   }

}
