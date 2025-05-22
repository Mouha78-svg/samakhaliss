import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeneauPageRoutingModule } from './seneau-routing.module';

import { SeneauPage } from './seneau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeneauPageRoutingModule
  ],
  declarations: [SeneauPage]
})
export class SeneauPageModule {}
