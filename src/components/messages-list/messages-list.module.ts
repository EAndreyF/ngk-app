import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MomentModule} from 'angular2-moment';
import 'moment/locale/ru';

import {MessagesListComponent} from './messages-list.component';
import {MessageItemComponent} from '../message-item/message-item.component';

@NgModule({
  imports: [
    IonicModule,
    MomentModule,
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
