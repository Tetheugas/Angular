import { Component, OnInit } from '@angular/core';
import { Plant } from '../model/plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent implements OnInit{
  plants: Plant[] = [{
    _id: '1', name: 'Samambaia', category: 'Easy'
  }];
  displayedColumns = ['name', 'category'];

  constructor(){/*this.plants = [];*/}

  ngOnInit(): void {
  }

}
