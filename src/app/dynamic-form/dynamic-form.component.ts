import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup: FormGroup | any;  
  
  output!: any;
  constructor(private formBuilder : FormBuilder) { 
   
  }

  ngOnInit() {
    this.dynamicFormGroup = this.formBuilder.group({
      address: new FormArray([this.createItem]),
    });
  }
  get createItem(): FormGroup {
    return this.formBuilder.group({
      streetAddress: '',
      city:'',
      state:''
    })
  }

  onSubmit() {
    this.output = this.dynamicFormGroup.controls['address'].value;
        console.log(this.output);
    }

    addNewAddress(): void {
      (this.dynamicFormGroup.get('address') as FormArray).push(this.createItem);
    }
    get formControllers() {
      return this.dynamicFormGroup.controls;
    }
    get AddressInfo() {
      return this.formControllers['address'] as FormArray;
    }
}
