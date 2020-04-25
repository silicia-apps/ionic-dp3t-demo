import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { DP3tState } from '../../store/dp3t.state';
import { Start, Stop} from '../../store/dp3t.actions';

import { IStatus } from '@silicia/capacitor-dp3t';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tracking',
  templateUrl: 'tracking.page.html',
  styleUrls: ['tracking.page.scss']
})
export class TrackingPage implements OnInit {

  @Select(DP3tState.BatteryOptimizerIsEnabled)
  public batteryOptimizerIsEnabled$: Observable<boolean>;
  @Select(DP3tState.getData)
  public dati$: Observable<IStatus>;

  constructor(private store: Store) {}

  async ngOnInit() {}

  onChangeDP3T(event) {
    console.log(event);
    if (event.detail.checked === true) {
      this.store.dispatch(new Start());
    } else {
      this.store.dispatch(new Stop());
    }
  }

}
