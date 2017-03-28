import {Injectable} from '@angular/core';

import {Route} from '../pages/route';

import {TusovkaModule} from '../pages/tusovka/tusovka.module';
import {MainModule} from '../pages/main/main.module';

const links = [
  MainModule.getRoute(),
  TusovkaModule.getRoute(),
];

const linksHash = links.reduce((acc, link) => {
  acc[link.name] = link;
  return acc;
}, {});

@Injectable()
export class RouterService {
  constructor() {}

  static getRoutes(): Array<Route> {
    return links;
  }

  static getRouteByName(name) {
    return linksHash[name];
  }
}
