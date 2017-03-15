import { Injectable } from '@angular/core';

import { Message } from '../models/message.model';
import { MESSAGES } from '../models/messages-mock';

@Injectable()
export class MessagesService {
  getAllMessages(): Promise<Message[]> {
    return Promise.resolve(MESSAGES);
  }
}
