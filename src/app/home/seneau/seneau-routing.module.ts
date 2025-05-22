import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeneauPage } from './seneau.page';

const routes: Routes = [
  {
    path: '',
    component: SeneauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeneauPageRoutingModule {}
