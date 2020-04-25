import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { DP3tState } from 'src/app/store/dp3t.state';
import { IStatus } from '@silicia/capacitor-dp3t';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private store: Store,
  ) { }

  @Select(DP3tState.getData)
  public dati$: Observable<IStatus>;

  ngOnInit() {
  }

  goTracking() {
    this.store.dispatch(new Navigate(['/tabs/tracking']));
  }

}
