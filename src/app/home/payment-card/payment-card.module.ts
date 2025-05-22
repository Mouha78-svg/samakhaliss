import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentCardPageRoutingModule } from './payment-card-routing.module';

import { PaymentCardPage } from './payment-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentCardPageRoutingModule
  ],
  declarations: [PaymentCardPage]
})
export class PaymentCardPageModule {}
