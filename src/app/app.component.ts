import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {Route} from '../pages/route';
import {RouterService} from '../services/router.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = RouterService.getRouteByName('Main').component;

  pages: Array<Route>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = RouterService.getRoutes();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
