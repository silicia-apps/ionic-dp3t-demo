import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'covid',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/covid/covid.module').then(m => m.CovidPageModule)
          }
        ]
      },
      {
        path: 'tracking',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/tracking/tracking.module').then(m => m.TrackingPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
