import { Injectable } from '@angular/core';

import { Message } from '../models/message.model';
import * as Parse from 'parse';
import IPromise = Parse.IPromise;

const APP_ID = '6d4cd51e-a9af-47a3-9538-a729d5c552f2';
const SERVER_URL = 'https://api.parse.buddy.com/parse/';

@Injectable()
export class ParseService {
  parse: any;
  constructor() {
    this.parse = Parse;
    this.init();
  }

  init() {
    this.parse.initialize(APP_ID, '');
    this.parse.serverURL = SERVER_URL;
  }
  getAllMessages(): IPromise<Message[]> {
    return new Parse.Query('Messages')
      .addDescending('time')
      .find()
      .then((messages) => {
        return messages
          .map(message => message.toJSON())
          .map(({title, text, time, objectId}) => {
            return {
              id: objectId,
              title,
              text,
              time,
            };
          });
      })
      .then((messages) => {
        console.log(messages);
        return messages;
      });
  }
}
