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
        path: 'depot',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./depot/depot.module').then((m) => m.DepotPageModule),
          },
        ],
      },
      {
        path: 'campusen',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./campusen/campusen.module').then(
                (m) => m.CampusenPageModule
              ),
          },
        ],
      },
      {
        path: 'senelec',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./senelec/senelec.module').then(
                (m) => m.SenelecPageModule
              ),
          },
        ],
      },
      {
        path: 'unchk',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./unchk/unchk.module').then((m) => m.UnchkPageModule),
          },
        ],
      },
      {
        path: 'seneau',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./seneau/seneau.module').then((m) => m.SeneauPageModule),
          },
        ],
      },
      {
        path: 'canal',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./canal/canal.module').then((m) => m.CanalPageModule),
          },
        ],
      },
      {
        path: 'woyofal',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./woyofal/woyofal.module').then(
                (m) => m.WoyofalPageModule
              ),
          },
        ],
      },
      {
        path: 'payment-card',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./payment-card/payment-card.module').then(
                (m) => m.PaymentCardPageModule
              ),
          },
        ],
      },
      {
        path: 'retrait',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./retrait/retrait.module').then(
                (m) => m.RetraitPageModule
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
