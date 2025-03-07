import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendusermoneyPage } from './sendusermoney.page';

const routes: Routes = [
  {
    path: '',
    component: SendusermoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendusermoneyPageRoutingModule {}
