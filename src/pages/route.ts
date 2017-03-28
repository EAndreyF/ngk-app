import {Component} from '@angular/core';
export class Route {
  component: Component;
  title: string;
  name: string;
  segment: string;
  defaultHistory?: Array<Component>;
}
