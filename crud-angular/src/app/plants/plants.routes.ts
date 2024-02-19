import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantsComponent } from './plants/plants.component';
import { PlantFormComponent } from './plant-form/plant-form.component';

const routes: Routes = [
  { path: '', component: PlantsComponent},
  { path: 'new', component: PlantFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantsRoutingModule { }
