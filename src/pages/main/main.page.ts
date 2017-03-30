import {Component} from '@angular/core';
import {RouterService} from '../../services/router.service';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  providers: [RouterService]
})
export class MainPage {
  shown: boolean = false;

  constructor(
    public routeService: RouterService
  ) {
  }

  ionViewWillEnter() {
    this.hideTusovka();
  }

  showTusovka({currentTarget}) {
    if (!this.shown) {
      this.shown = true;

      const onTransitionEnd = () => {
        currentTarget.removeEventListener('animationend', onTransitionEnd);
        this.routeService.navigateTo('Tusovka', true);
      };
      // currentTarget.classList.add('main-tusovka_animated');
      currentTarget.addEventListener('animationend', onTransitionEnd);
    }
    console.log(currentTarget);
  }

  hideTusovka() {
    this.shown = false;
  }
}
