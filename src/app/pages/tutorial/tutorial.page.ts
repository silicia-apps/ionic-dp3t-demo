import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { Select, Store } from '@ngxs/store';
import {
  Start,
  GetStatus,
  Stop,
  AskForDisableBatteryOptimizer,
  AskForGeolocationPermission,
  AskForActivateBluetooth
} from '../../store/dp3t.actions';
import { DP3tState } from '../../store/dp3t.state';
import { Observable } from 'rxjs';
import { IStatus } from '@silicia/capacitor-dp3t';
import { Navigate } from '@ngxs/router-plugin';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-tutorial',
  templateUrl: 'tutorial.page.html',
  styleUrls: ['tutorial.page.scss']
})
export class TutorialPage implements OnInit {

  @ViewChild(IonSlides)
  public slides: IonSlides;

  @Select(DP3tState.getData)
  public dati$: Observable<IStatus>;

  @Select(DP3tState.BatteryOptimizerIsEnabled)
  public batteryOptimizerIsEnabled$: Observable<boolean>;

  @Select(DP3tState.geolocationIsGranted)
  public geolocationIsGranted$: Observable<boolean>;


  @Select(DP3tState.BluetoothIsActive)
  public bluetoothIsActive$: Observable<boolean>;

  public showSkip = true;
  public dir = 'ltr';

  constructor(
    private store: Store,
  ) { }

  async ngOnInit() {}

  ionViewWillEnter() {
    this.dati$.subscribe((status) => {
      if (status.isActive === true) {
        this.store.dispatch(new Navigate(['tabs']));
      }
    });
  }

  async onSlideChangeStart() {
    this.showSkip = !(await this.slides.isEnd());
  }

  async onSkip() {
    this.slides.slideTo(await this.slides.length());
  }

  next() {
    this.slides.slideNext();
  }

  start() {
    this.store.dispatch(Start).subscribe(() => {
      this.store.dispatch(new Navigate(['tabs']));
    });
  }

  askForDisableBatteryOptimizer() {
    this.store.dispatch(AskForDisableBatteryOptimizer).subscribe(() => { this.store.dispatch(GetStatus); });
  }

  AskForGeolocationPermission() {
    this.store.dispatch(AskForGeolocationPermission).subscribe(() => { this.store.dispatch(GetStatus); });
  }

  AskForActivateBluetooth() {
    this.store.dispatch(AskForActivateBluetooth).subscribe(() => { this.store.dispatch(GetStatus); });
  }

}
