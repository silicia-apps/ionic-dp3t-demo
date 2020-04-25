import { Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { Dp3tStateModel } from './dp3t.model';
import {
  Start,
  Stop,
  GetStatus,
  AskForDisableBatteryOptimizer,
  AskForActivateBluetooth,
  AskForGeolocationPermission
} from './dp3t.actions';

import '@silicia/capacitor-dp3t';
import { Plugins } from '@capacitor/core';
import { IStatus } from '@silicia/capacitor-dp3t';
const { Dp3tPlugin, Geolocation } = Plugins;

@State<Dp3tStateModel>({
  name: 'dp3t',
  defaults: new Dp3tStateModel(),
})
@Injectable()
export class DP3tState implements NgxsOnInit {

  constructor() { }

  @Selector([DP3tState])
  static BluetoothIsActive(state: Dp3tStateModel) {
    return !state.data.errors.includes('BLE_DISABLED');
  }

  @Selector([DP3tState])
  static BatteryOptimizerIsEnabled(state: Dp3tStateModel): boolean {
    return state.data.errors.includes('BATTERY_OPTIMIZER_ENABLED');
  }

  @Selector([DP3tState])
  static geolocationIsGranted(state: Dp3tStateModel) {
    return !state.data.errors.includes('MISSING_LOCATION_PERMISSION');
  }
  @Selector([DP3tState])
  static getData(state: Dp3tStateModel) {
    return state.data;
  }

  ngxsOnInit(ctx: StateContext<Dp3tStateModel>) {
    Dp3tPlugin.addListener('Dp3tPluginUpdate', (info: IStatus) => {
      console.log(info);
      ctx.patchState({ data: info });
    });
  }

  @Action(Start)
  async Start(ctx: StateContext<Dp3tStateModel>) {
      const state = ctx.getState();
      Dp3tPlugin.start();
  }

  @Action(Stop)
  async Stop(ctx: StateContext<Dp3tStateModel>) {
    const state = ctx.getState();
    Dp3tPlugin.stop();
  }

  @Action(GetStatus)
  async getStatus(ctx: StateContext<Dp3tStateModel>) {
    const newState: IStatus = await Dp3tPlugin.getStatus();
    ctx.patchState({data: newState});
  }

  @Action(AskForDisableBatteryOptimizer)
  async askForDisableBatteryOptimizer(ctx: StateContext<Dp3tStateModel>) {
    Dp3tPlugin.askForDisableBatteryOptimizer();
  }

  @Action(AskForActivateBluetooth)
  async askForActivateBluetooth(ctx: StateContext<Dp3tStateModel>) {
    Dp3tPlugin.askForActivateBluetooth();
  }

  @Action(AskForGeolocationPermission)
  async askForGeolocationPermission(ctx: StateContext<Dp3tStateModel>) {
    Geolocation.requestPermissions();
  }

}
