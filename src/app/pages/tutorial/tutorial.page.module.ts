import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TutorialPage } from './tutorial.page';
import { FivStepperModule } from '@fivethree/core';
import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FivStepperModule,
    SharedComponentsModule,
    RouterModule.forChild([{ path: '', component: TutorialPage }])
  ],
  declarations: [TutorialPage]
})
export class TutorialPageModule {}
