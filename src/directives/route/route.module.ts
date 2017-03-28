import {NgModule} from '@angular/core';
import {TRouteDirective} from './route.directive';

@NgModule({
  declarations: [
    TRouteDirective,
  ],
  exports: [
    TRouteDirective
  ]
})
export class RouteModule {
}
