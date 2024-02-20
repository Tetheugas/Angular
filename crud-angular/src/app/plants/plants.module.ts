import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantsComponent } from './plants/plants.component';


import { PlantFormComponent } from './plant-form/plant-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, PlantsRoutingModule, ReactiveFormsModule, PlantsComponent, PlantFormComponent],
})
export class PlantsModule {}
