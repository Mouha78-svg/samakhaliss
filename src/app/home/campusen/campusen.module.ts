import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampusenPageRoutingModule } from './campusen-routing.module';

import { CampusenPage } from './campusen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampusenPageRoutingModule
  ],
  declarations: [CampusenPage]
})
export class CampusenPageModule {}
