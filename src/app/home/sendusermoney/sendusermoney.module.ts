import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendusermoneyPageRoutingModule } from './sendusermoney-routing.module';

import { SendusermoneyPage } from './sendusermoney.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SendusermoneyPageRoutingModule,
  ],
  declarations: [SendusermoneyPage],
})
export class SendusermoneyPageModule {}
