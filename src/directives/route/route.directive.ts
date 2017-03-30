import {Directive, HostListener, Input} from '@angular/core';

import {RouterService} from '../../services/router.service';

/**
 * Директива для роута по клику.
 * Если на вход передать строку - то произойдет роут по этой строке,
 * Если передать объект, то произойдет роут по свойству name,
 * с параметрами params
 */
@Directive({
  selector: '[tRoute]',
  providers: [RouterService],
})
export class TRouteDirective {
  constructor(
    private routeService: RouterService
  ) {
  }

  @HostListener('click') onClick() {
    this.routeService.navigateTo(this.routeName);
  }

  @Input('tRoute') routeName: string | {name: string, params: Array<any>};
}
