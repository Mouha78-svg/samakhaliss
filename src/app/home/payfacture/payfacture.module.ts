import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayfacturePageRoutingModule } from './payfacture-routing.module';

import { PayfacturePage } from './payfacture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayfacturePageRoutingModule
  ],
  declarations: [PayfacturePage]
})
export class PayfacturePageModule {}
