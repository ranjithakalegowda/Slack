import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../shared/model/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userCollection : AngularFirestoreCollection<User>;
  users : Observable<User[]>;
  userDoc : AngularFirestoreDocument<User>;

  constructor(private afs : AngularFirestore,
    private db : AngularFireDatabase) 
    {
      this.userCollection = afs.collection('users');
     }

  getClients() : Observable<User[]> {
    this.users = this.userCollection.snapshotChanges()
      .map(changes => {
        return changes.map(action =>{
          const data = action.payload.doc.data() as User;
          data.id = action.payload.doc.id;
          return data;
        });
      });
      return this.users;
  }
}

