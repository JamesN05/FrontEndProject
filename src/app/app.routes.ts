import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'limerick-ennis',
    loadComponent: () => import('./limerick-ennis/limerick-ennis.page').then( m => m.LimerickEnnisPage)
  },
  {
    path: 'cork-cobh-midleton',
    loadComponent: () => import('./cork-cobh-midleton/cork-cobh-midleton.page').then( m => m.CorkCobhMidletonPage)
  },
  {
    path: 'athlone-wesport-ballina',
    loadComponent: () => import('./athlone-wesport-ballina/athlone-wesport-ballina.page').then( m => m.AthloneWesportBallinaPage)
  },
  {
    path: 'ballybrophy-limerick',
    loadComponent: () => import('./ballybrophy-limerick/ballybrophy-limerick.page').then( m => m.BallybrophyLimerickPage)
  },
  {
    path: 'limerick-waterford',
    loadComponent: () => import('./limerick-waterford/limerick-waterford.page').then( m => m.LimerickWaterfordPage)
  },
  {
    path: 'dundalk-belfast',
    loadComponent: () => import('./dundalk-belfast/dundalk-belfast.page').then( m => m.DundalkBelfastPage)
  },
];
