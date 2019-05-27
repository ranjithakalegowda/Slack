import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app';
import { Chat } from '../shared/model/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
 
  chatMessages: AngularFireList<Chat>;
  chatMessage: Chat;
  user: any;
  userName: string;

  constructor(private db: AngularFireDatabase,
    private afauth: AngularFireAuth) {
    this.afauth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
  }

  sendMessage(msg:string) {
    const timeStamp = this.getTimeStamp();
    const email = this.user ? this.user.email : 'test@gmail.com';
    this.chatMessages  = this.db.list('messages');
    this.chatMessages.push({
        email : email,
        userName : 'this.userName',
        timeSent : timeStamp,
        message : msg
      });
    this.getMessages();
    console.log("called me");
  }

  getMessages(): Observable<Chat[]> {
    console.log('this is messages');
    return this.db.list('messages', ref => {
      let q = ref.limitToLast(25).orderByKey();
      return q;
    }).valueChanges();
   }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
      
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();
    return (date + ' ' + time);
  }

}
