import { ICovidData } from './covid.model';

export class Start {
  static type = '[DP3T] Start Discovery';
  constructor() {}
}

export class Stop {
  static type = `[DP3T] Stop Discovery`;
  constructor() {}
}

export class GetStatus {
  static type = `[DP3T] Get Status`;
  constructor() {}
}

export class AskForDisableBatteryOptimizer {
  static type = `[DP3T] ask For Disable Battery Optimizer`;
  constructor() {}
}

export class AskForActivateBluetooth {
  static type = `[DP3T] ask For Activate Bluetooth`;
  constructor() {}
}

export class AskForGeolocationPermission {
  static type = `[DP3T] ask For Geolocation`;
  constructor() {}
}
