import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnchkPageRoutingModule } from './unchk-routing.module';

import { UnchkPage } from './unchk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnchkPageRoutingModule
  ],
  declarations: [UnchkPage]
})
export class UnchkPageModule {}
