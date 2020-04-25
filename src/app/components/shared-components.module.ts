import { NgModule } from '@angular/core';
import { FivStepperModule, FivExpandableModule } from '@fivethree/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SiliciaCardComponent } from './card/card.component';
import { CheckDeviceComponent } from './check-device/check-device.component';

@NgModule({
  declarations: [
    SiliciaCardComponent,
    CheckDeviceComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    FivStepperModule,
    FivExpandableModule,
  ],
  exports: [
    SiliciaCardComponent,
    CheckDeviceComponent,
    TranslateModule,
  ]
})
export class SharedComponentsModule {}
