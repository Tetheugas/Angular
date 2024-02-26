import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'plants' },
  {
    path: 'plants',
    loadChildren: () => import('./plants/plants.routes').then(m => m.PLANTS_ROUTES)
  }
];
