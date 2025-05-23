import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaycreditPageRoutingModule } from './paycredit-routing.module';

import { PaycreditPage } from './paycredit.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PaycreditPageRoutingModule],
  declarations: [PaycreditPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaycreditPageModule {}
