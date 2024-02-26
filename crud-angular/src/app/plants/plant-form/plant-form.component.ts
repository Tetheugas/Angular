import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { PlantsService } from '../services/plants.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';

@Component({
    selector: 'app-plant-form',
    templateUrl: './plant-form.component.html',
    styleUrl: './plant-form.component.scss',
    standalone: true,
    imports: [MatCard, MatToolbar, MatCardContent, ReactiveFormsModule, MatFormField, MatInput, MatCardActions, MatButton, MatSelectModule]
})
export class PlantFormComponent implements OnInit{


  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: PlantsService,
    private snackBar: MatSnackBar){
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]

    });

  }
  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel(){

  }


  private onError() {
    this.snackBar.open('Erro ao salvar Planta', '', { duration: 5000 });
  }


  ngOnInit(): void {
  }


}
