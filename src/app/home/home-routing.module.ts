import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'homeclient',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./homeclient/homeclient.module').then(
                (m) => m.HomeclientPageModule
              ),
          },
          {
            path: ':homeId',
            loadChildren: () =>
              import('./homeclient/home-detail/home-detail.module').then(
                (m) => m.HomeDetailPageModule
              ),
          },
        ],
      },
      {
        path: 'sendusermoney',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./sendusermoney/sendusermoney.module').then(
                (m) => m.SendusermoneyPageModule
              ),
          },
        ],
      },
      {
        path: 'payfacture',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./payfacture/payfacture.module').then(
                (m) => m.PayfacturePageModule
              ),
          },
        ],
      },
      {
        path: 'paycredit',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./paycredit/paycredit.module').then(
                (m) => m.PaycreditPageModule
              ),
          },
        ],
      },
      {
        path: 'changepw',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./changepw/changepw.module').then(
                (m) => m.ChangepwPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/home/tabs/homeclient',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/tabs/homeclient',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
