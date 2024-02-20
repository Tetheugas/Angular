import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-plant-form',
    templateUrl: './plant-form.component.html',
    styleUrl: './plant-form.component.scss',
    standalone: true,
    imports: [MatCard, MatToolbar, MatCardContent, ReactiveFormsModule, MatFormField, MatInput, MatCardActions, MatButton]
})
export class PlantFormComponent implements OnInit{

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]

    });

  }
  ngOnInit(): void {
  }


}
