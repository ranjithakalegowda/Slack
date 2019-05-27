import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Chat } from '../shared/model/chat';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  feed : Observable<Chat[]>;
  chatMessage : Chat;

  constructor(private chatService : ChatService) { }

  ngOnInit() {
    this.feed = this.chatService.getMessages();  
  }
  ngOnChanges(){
    this.feed = this.chatService.getMessages();
  }
  
}
