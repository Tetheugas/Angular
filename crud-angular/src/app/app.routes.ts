import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'plants',
    loadChildren: () => import('./plants/plants.routes').then(m => m.PLANTS_ROUTES)
  }
];
