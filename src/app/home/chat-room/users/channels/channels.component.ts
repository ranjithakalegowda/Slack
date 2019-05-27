import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels : AngularFireList<any>;
  channel : Observable<any[]>;
  data : any;

  constructor(private db : AngularFireDatabase) { 
    this.channels = this.db.list('/channels');
    this.channel = this.channels.valueChanges();
    this.channel.subscribe(res =>{
      this.data = res;
    })
  }

  ngOnInit() {
  }
}
