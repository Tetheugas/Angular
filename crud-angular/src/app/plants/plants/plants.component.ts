import { PlantsService } from './../services/plants.service';
import { Component, OnInit, inject } from '@angular/core';
import { Plant } from '../model/plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent implements OnInit{
  plants: Plant[] = [];
  displayedColumns = ['name', 'category'];


  constructor(private plantsService: PlantsService){
    /*this.plants = [];*/

    this.plants = this.plantsService.list()
  }

  ngOnInit(): void {
  }

}
