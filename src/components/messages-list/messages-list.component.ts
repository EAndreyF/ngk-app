import {Component, Input} from '@angular/core';
import {Message} from '../../models/message.model';

@Component({
  selector: 'messages-list',
  templateUrl: 'messages-list.html',
})
export class MessagesListComponent {
  @Input()
  messages: Message[];

  constructor() {
  }
}
