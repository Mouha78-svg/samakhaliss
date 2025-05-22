import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenelecPage } from './senelec.page';

const routes: Routes = [
  {
    path: '',
    component: SenelecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenelecPageRoutingModule {}
