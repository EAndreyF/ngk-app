import {Component, OnInit} from '@angular/core';

import {MessagesService} from '../../services/messages.service';
import {Message} from '../../models/message.model';

@Component({
  selector: 'messages-page-content',
  templateUrl: 'messages-page-content.html',
  providers: [MessagesService]
})
export class MessagesPageContentComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messagesService: MessagesService) {
  }

  getMessages(): void {
    this.messagesService
      .getAllMessages()
      .then(messages => this.messages = messages);
  }

  ngOnInit(): void {
    this.getMessages();
  }


}
