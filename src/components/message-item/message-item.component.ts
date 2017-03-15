import {Component, Input} from '@angular/core';
import {Message} from '../../models/message.model';

@Component({
  selector: 'message-item',
  templateUrl: 'message-item.html'
})
export class MessageItemComponent {
  @Input()
  message: Message;

  constructor() {
  }
}
