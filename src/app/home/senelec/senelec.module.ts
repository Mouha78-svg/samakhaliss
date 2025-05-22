import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenelecPageRoutingModule } from './senelec-routing.module';

import { SenelecPage } from './senelec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenelecPageRoutingModule
  ],
  declarations: [SenelecPage]
})
export class SenelecPageModule {}
