import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {TusovkaPage} from './tusovka.page';
import {MessagesListModule} from '../../components/messages-list/messages-list.module';

import {MainModule} from '../main/main.module';

@NgModule({
  declarations: [
    TusovkaPage,
  ],
  imports: [
    MessagesListModule,
    IonicModule,
  ],
  entryComponents: [
    TusovkaPage,
  ],
})
export class TusovkaModule {
  static getRoute() {
    return {
      component: TusovkaPage,
      title: 'Тусовка',
      name: 'Tusovka',
      segment: 'tusovka',
      defaultHistory: [MainModule.getRoute().component]
    };
  }
}
