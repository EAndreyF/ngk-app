import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {MessagesListModule} from '../messages-list/messages-list.module';
import {MessagesPageContentComponent} from './messages-page-content.component';

@NgModule({
  declarations: [
    MessagesPageContentComponent,
  ],
  imports: [
    IonicModule,
    MessagesListModule,
  ],
  exports: [
    MessagesPageContentComponent,
  ],
})
export class MessagesPageContentModule {
}
