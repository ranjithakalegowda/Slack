import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../shared/model/chat';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage : Chat;
  userEmail : string;
  userName : string;
  messageContent : string;
  timeStamp : Date = new Date();

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
    this.timeStamp = chatMessage.timeSent;
  }

}
