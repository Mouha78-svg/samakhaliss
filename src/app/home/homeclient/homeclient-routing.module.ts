import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeclientPage } from './homeclient.page';

const routes: Routes = [
  {
    path: '',
    component: HomeclientPage
  },
  {
    path: 'home-detail',
    loadChildren: () => import('./home-detail/home-detail.module').then( m => m.HomeDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeclientPageRoutingModule {}
