import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message;

  constructor(private chatService : ChatService) { }

  ngOnInit() {
    
  }

  send(event){
    this.message = event.target.value;
    this.chatService.sendMessage(this.message);
  }

  handleSubmit(event){
    if(event.keyCode === 13){
      this.send(event);
    }
  }

}
