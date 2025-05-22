import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoyofalPageRoutingModule } from './woyofal-routing.module';

import { WoyofalPage } from './woyofal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoyofalPageRoutingModule
  ],
  declarations: [WoyofalPage]
})
export class WoyofalPageModule {}
