import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {CustomIconsModule} from 'ionic2-custom-icons';

import {MessagesService} from '../services/messages.service';
import {ParseService} from '../services/parse.service';
import {RouterService} from '../services/router.service';

import {MyApp} from './app.component';

import {TusovkaModule} from '../pages/tusovka/tusovka.module';
import {MainModule} from '../pages/main/main.module';
import {RouteModule} from '../directives/route/route.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    CustomIconsModule,
    IonicModule.forRoot(MyApp, {
      locationStrategy: 'hash'
    }, {
      links: RouterService.getRoutes()
    }),
    MainModule,
    TusovkaModule,
    RouteModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    MessagesService,
    ParseService,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {
}
