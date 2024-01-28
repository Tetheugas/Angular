import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantsComponent } from './plants/plants.component';

@NgModule({
  declarations: [
    PlantsComponent
  ],
  imports: [
    CommonModule,
    PlantsRoutingModule,
    MatTableModule
  ]
})
export class PlantsModule { }
