import {Component, OnInit} from '@angular/core';

import {MessagesService} from '../../services/messages.service';
import {Message} from '../../models/message.model';

@Component({
  selector: 'page-tusovka',
  templateUrl: 'tusovka.html',
  providers: [MessagesService]
})
export class TusovkaPage implements OnInit {
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
