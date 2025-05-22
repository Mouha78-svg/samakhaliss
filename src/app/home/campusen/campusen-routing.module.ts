import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampusenPage } from './campusen.page';

const routes: Routes = [
  {
    path: '',
    component: CampusenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampusenPageRoutingModule {}
