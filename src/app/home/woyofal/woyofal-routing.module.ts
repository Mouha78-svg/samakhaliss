import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoyofalPage } from './woyofal.page';

const routes: Routes = [
  {
    path: '',
    component: WoyofalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoyofalPageRoutingModule {}
