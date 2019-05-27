import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  token:string;

  user: Observable<firebase.User>;

  constructor(private af: AngularFireAuth, 
    private afs : AngularFirestore,
    private router : Router) {
      this.user = this.af.authState.pipe(
        switchMap(user =>{
          if(user){
            return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
          }
          else{
            return of(null);
          }
        })
      )
    // this.user = af.authState;
  }
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
      this.router.navigate(['users']);
    })
    
  }

  isAuthenticated(){
    return this.token != null;
  }
}
