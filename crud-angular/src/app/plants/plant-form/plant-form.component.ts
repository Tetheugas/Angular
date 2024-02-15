import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrl: './plant-form.component.scss'
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
