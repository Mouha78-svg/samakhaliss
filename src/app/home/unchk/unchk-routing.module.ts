import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnchkPage } from './unchk.page';

const routes: Routes = [
  {
    path: '',
    component: UnchkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnchkPageRoutingModule {}
