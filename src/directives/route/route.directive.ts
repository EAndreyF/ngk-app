import {Directive, HostListener, Input} from '@angular/core';
import {App} from 'ionic-angular';

import {RouterService} from '../../services/router.service';

/**
 * Директива для роута по клику.
 * Если на вход передать строку - то произойдет роут по этой строке,
 * Если передать объект, то произойдет роут по свойству name,
 * с параметрами params
 */
@Directive({
  selector: '[tRoute]'
})
export class TRouteDirective {
  constructor(public appCtrl: App) {
  }

  @HostListener('click') onClick() {
    let routeName;
    let routeParams;
    if (typeof this.routeName === 'string') {
      routeName = this.routeName;
    } else {
      routeName = this.routeName.name;
      routeParams = this.routeName.params;
    }

    const route = RouterService.getRouteByName(routeName);

    if (route) {
      this.appCtrl.getRootNav().push(route.component, routeParams);
    }
  }

  @Input('tRoute') routeName: string | {name: string, params: Array<any>};
}
