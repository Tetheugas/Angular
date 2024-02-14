import { PlantsService } from './../services/plants.service';
import { Component, OnInit } from '@angular/core';
import { Plant } from '../model/plant';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent implements OnInit{
  plants$: Observable<Plant[]>;
  displayedColumns = ['name','category','actions'];


  constructor(private plantsService: PlantsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ){
    /*this.plants = [];*/

    this.plants$ = this.plantsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar itens')
        return of([])
      })
    )

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

  

}
