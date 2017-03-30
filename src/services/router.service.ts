import {Injectable} from '@angular/core';
import {App} from 'ionic-angular';

import {Route} from '../pages/route';


@Injectable()
export class RouterService {
  links = [];
  linksHash = {};
  constructor(public appCtrl: App) {
    const TusovkaModule = require('../pages/tusovka/tusovka.module').TusovkaModule;
    const MainModule = require('../pages/main/main.module').MainModule;

    this.links = [
      MainModule.getRoute(),
      TusovkaModule.getRoute(),
    ];

    this.linksHash = this.links.reduce((acc, link) => {
      acc[link.name] = link;
      return acc;
    }, {});
  }

  getRoutes(): Array<Route> {
    return this.links;
  }

  getRouteByName(name) {
    return this.linksHash[name];
  }

  navigateTo(params, noAnimate?) {
    let routeName;
    let routeParams;
    if (typeof params === 'string') {
      routeName = params;
    } else {
      routeName = params.name;
      routeParams = params.params;
    }

    const route = this.getRouteByName(routeName);

    if (route) {
      let opts = {
        animate: true
      };

      if (noAnimate) {
        opts.animate = false;
      }
      this.appCtrl.getRootNav().push(route.component, routeParams, opts);
    }
  }
}
