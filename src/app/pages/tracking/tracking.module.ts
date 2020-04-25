import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrackingPage } from './tracking.page';
import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    RouterModule.forChild([{ path: '', component: TrackingPage }])
  ],
  declarations: [TrackingPage]
})
export class TrackingPageModule {}
