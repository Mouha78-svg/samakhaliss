import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayfacturePage } from './payfacture.page';

const routes: Routes = [
  {
    path: '',
    component: PayfacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayfacturePageRoutingModule {}
