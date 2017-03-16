import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MessagesService} from '../services/messages.service';
import {ParseService} from '../services/parse.service';
import {MyApp} from './app.component';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';

import {TusovkaModule} from '../pages/tusovka/tusovka.module';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TusovkaModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
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
