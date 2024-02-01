import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantsComponent } from './plants/plants.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlantsComponent],
  imports: [CommonModule, PlantsRoutingModule, AppMaterialModule, SharedModule],
})
export class PlantsModule {}
