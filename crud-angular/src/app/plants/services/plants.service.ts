import { Injectable } from '@angular/core';
import { Plant } from '../model/plant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private HttpClient: HttpClient) { }

  list(): Plant[] {
    return [
      {_id: '1', name: 'Samambaia', category: 'Easy'}
    ];
  }
}
