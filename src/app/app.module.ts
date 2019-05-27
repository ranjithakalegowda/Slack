import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { UsersService } from './services/users.service';
import { ChatComponent } from './chat/chat.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChatRoomComponent } from './home/chat-room/chat-room.component';
import { MessagesComponent } from './home/chat-room/messages/messages.component';
import { AboutComponent } from './home/chat-room/about/about.component';
import { UserInfoComponent } from './home/chat-room/users/user-info/user-info.component';
import { ChannelsComponent } from './home/chat-room/users/channels/channels.component';
import { DirectMessagesComponent } from './home/chat-room/users/direct-messages/direct-messages.component';
import { HeaderComponent } from './home/chat-room/messages/header/header.component';
import { ChatsComponent } from './home/chat-room/messages/chats/chats.component';
import { SendMessageComponent } from './home/chat-room/messages/send-message/send-message.component';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './home/chat-room/users/users.component';
import { AuthService } from './core/auth.service';
import { FooterComponent } from './footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    FeedComponent,
    MessageComponent,
    UserFeedComponent,
    UserProfileComponent,
    NavComponent,
    ChatRoomComponent,
    MessagesComponent,
    AboutComponent,
    UserInfoComponent,
    ChannelsComponent,
    DirectMessagesComponent,
    HeaderComponent,
    ChatsComponent,
    SendMessageComponent,
    UsersComponent,
    FooterComponent    ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'slack'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot() 

  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
