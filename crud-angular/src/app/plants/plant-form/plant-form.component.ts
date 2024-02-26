import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatToolbar } from '@angular/material/toolbar';
import {
  MatCard,
  MatCardContent,
  MatCardActions,
} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { PlantsService } from '../services/plants.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrl: './plant-form.component.scss',
  standalone: true,
  imports: [
    MatCard,
    MatToolbar,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatCardActions,
    MatButton,
    MatSelectModule,
    MatSnackBarModule,
  ],
})
export class PlantFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: PlantsService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {}



  onSubmit() {
    this.service
      .save(this.form.value)
      .subscribe((result) => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Success when saving the plant', '', {duration: 5000});
    this.onCancel();
  }
  private onError() {
    this.snackBar.open('Error when saving the plant', '', {duration: 5000});
  }
}
