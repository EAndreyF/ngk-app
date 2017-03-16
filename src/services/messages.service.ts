import {Injectable} from '@angular/core';

import {Message} from '../models/message.model';
// import {MESSAGES} from '../models/messages-mock';

import {ParseService} from './parse.service';
import IPromise = Parse.IPromise;

@Injectable()
export class MessagesService {
  constructor(
    private parseService: ParseService
  ) {}

  getAllMessages(): IPromise<Message[]> {
    return this.parseService.getAllMessages();
  }
}
