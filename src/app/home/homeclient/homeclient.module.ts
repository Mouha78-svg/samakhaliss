import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeclientPageRoutingModule } from './homeclient-routing.module';

import { HomeclientPage } from './homeclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeclientPageRoutingModule
  ],
  declarations: [HomeclientPage]
})
export class HomeclientPageModule {}
