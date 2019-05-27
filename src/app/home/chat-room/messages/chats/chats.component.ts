import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

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
