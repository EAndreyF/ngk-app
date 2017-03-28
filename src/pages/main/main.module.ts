import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {MainPage} from './main.page';
import {RouteModule} from '../../directives/route/route.module';
import {MessagesPageContentModule} from '../../components/messages-page-content/messages-page-content.module';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicModule,
    RouteModule,
    MessagesPageContentModule,
  ],
  entryComponents: [
    MainPage,
  ],
})
export class MainModule {
  static getRoute() {
    return {
      component: MainPage,
      title: 'Главная',
      name: 'Main',
      segment: ''
    };
  }
}
