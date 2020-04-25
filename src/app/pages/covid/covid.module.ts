import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CovidPageRoutingModule } from './covid-routing.module';

import { SharedComponentsModule } from '../../components/shared-components.module';

import { CovidPage } from './covid.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NgxChartsModule,
    SharedComponentsModule,
    CovidPageRoutingModule
  ],
  declarations: [CovidPage]
})
export class CovidPageModule {}
