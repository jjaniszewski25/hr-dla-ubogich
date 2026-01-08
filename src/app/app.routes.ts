import { Routes } from '@angular/router';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login),
  },

  {
    path: '',
    loadComponent: () => import('./layout/shell/shell').then(m => m.Shell),
    canActivate: [authGuard],
    children: [
      {
        path: 'stronaGlowna',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
      },
      {
        path: 'dodajNowyPost',
        loadComponent: () => import('./pages/add-post/add-post').then(m => m.AddPost),
      },
      {
        path: 'chat/:id',
        loadComponent: () => import('./pages/chat/chat').then(m => m.Chat),
      },
      {
        path: 'profil',
        loadComponent: () => import('./pages/profile/profile').then(m => m.Profile),
      },
      {
        path: 'korpoSzczury',
        loadComponent: () => import('./pages/structure/structure').then(m => m.Structure),
      },
      {
        path: 'mapaBiura',
        loadComponent: () => import('./pages/office-map/office-map').then(m => m.OfficeMap),
      },

      { path: '', pathMatch: 'full', redirectTo: 'stronaGlowna' },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
