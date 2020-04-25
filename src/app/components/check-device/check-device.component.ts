import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { DP3tState } from 'src/app/store/dp3t.state';
import { IStatus } from '@silicia/capacitor-dp3t';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import {
  AskForDisableBatteryOptimizer,
  GetStatus,
  AskForActivateBluetooth,
  AskForGeolocationPermission, Start } from 'src/app/store/dp3t.actions';

@Component({
  selector: 'check-device',
  templateUrl: './check-device.component.html',
  styleUrls: ['./check-device.component.html'],
})

export class CheckDeviceComponent implements OnInit {

  @Select(DP3tState.getData)
  public dati$: Observable<IStatus>;

  @Select(DP3tState.BatteryOptimizerIsEnabled)
  public batteryOptimizerIsEnabled$: Observable<boolean>;

  @Select(DP3tState.geolocationIsGranted)
  public geolocationIsGranted$: Observable<boolean>;


  @Select(DP3tState.BluetoothIsActive)
  public bluetoothIsActive$: Observable<boolean>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
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
