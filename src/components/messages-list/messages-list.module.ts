import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {MessagesListComponent} from './messages-list.component';
import {MessageItemComponent} from '../message-item/message-item.component';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    MessagesListComponent,
    MessageItemComponent,
  ],
  exports: [
    MessagesListComponent,
  ]
})
export class MessagesListModule {
}
