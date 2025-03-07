import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaycreditPage } from './paycredit.page';

const routes: Routes = [
  {
    path: '',
    component: PaycreditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaycreditPageRoutingModule {}
