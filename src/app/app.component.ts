import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import {TranslateService} from '@ngx-translate/core';

import { GetStatus } from './store/dp3t.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private store: Store,
    private translateService: TranslateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    registerLocaleData(it);
    this.translateService.setDefaultLang('it');
    this.translateService.use('it');

    this.platform.ready().then(() => {
      console.log('app ready');
      this.store.dispatch(GetStatus);
      this.platform.pause.subscribe(() => {
        console.log('app on pause');
        this.store.dispatch(GetStatus);
      });
      this.platform.resume.subscribe(() => {
        console.log('app on resume');
        this.store.dispatch(GetStatus);
    });
    });
  }
}
