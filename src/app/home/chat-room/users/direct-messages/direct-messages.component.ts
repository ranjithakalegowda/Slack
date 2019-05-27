import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.css']
})
export class DirectMessagesComponent implements OnInit {

  itemsRef : AngularFireList<any>;
  items$   : Observable<any>;
  data: any;

  constructor(private userService : UsersService, 
    private db : AngularFireDatabase) {

      this.itemsRef = this.db.list('users');
      this.items$ = this.itemsRef.valueChanges();
      this.items$.subscribe(response =>{
      console.log(response);
      this.data = response;
    })

   }

  ngOnInit() {
  }

}
