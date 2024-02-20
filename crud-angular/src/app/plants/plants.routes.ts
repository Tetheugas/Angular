import { PlantsComponent } from './plants/plants.component';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { Routes } from '@angular/router';

export const PLANTS_ROUTES: Routes = [
  { path: '', component: PlantsComponent},
  { path: 'new', component: PlantFormComponent}
];



