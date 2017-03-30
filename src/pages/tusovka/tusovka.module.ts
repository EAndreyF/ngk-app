import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {TusovkaPage} from './tusovka.page';
import {MessagesPageContentModule} from '../../components/messages-page-content/messages-page-content.module';

import {MainModule} from '../main/main.module';

@NgModule({
  declarations: [
    TusovkaPage,
  ],
  imports: [
    MessagesPageContentModule,
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
      // defaultHistory: [MainModule.getRoute().component]
    };
  }
}
