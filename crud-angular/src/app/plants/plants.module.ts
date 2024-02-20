import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantsComponent } from './plants/plants.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, PlantsRoutingModule, AppMaterialModule, SharedModule, ReactiveFormsModule, PlantsComponent, PlantFormComponent],
})
export class PlantsModule {}
