import { Injectable } from '@angular/core';
import { Plant } from '../model/plant';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  private readonly API = '/assets/plants.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Plant[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(plants => console.log(plants))
    );
}}
