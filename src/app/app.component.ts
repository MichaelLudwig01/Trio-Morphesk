import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper} from './router-animations';
import { Router } from '@angular/router';
import { RouterInfoService } from './router-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]
})
export class AppComponent {
  title = 'TrioMorphesk';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(private router: Router, info: RouterInfoService ) {
    console.log(this.router.url);
  }

  read(url: string){
    if (url == this.router.url) {
      return true;
    } else {
      return false;
    }
  }
}
