import { PlantsService } from './../services/plants.service';
import { Component, OnInit } from '@angular/core';
import { Plant } from '../model/plant';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton, MatIconButton } from '@angular/material/button';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { NgIf, AsyncPipe } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard } from '@angular/material/card';



@Component({
    selector: 'app-plants',
    templateUrl: './plants.component.html',
    styleUrl: './plants.component.scss',
    standalone: true,
    imports: [MatCard, MatToolbar, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, RouterLink, MatMiniFabButton, MatIcon, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatProgressSpinner, AsyncPipe]
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
