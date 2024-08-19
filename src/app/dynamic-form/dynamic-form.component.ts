import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  index!: number;
  constructor(private formBuilder : FormBuilder) { 
   
  }

  ngOnInit() {
    this.dynamicFormGroup = this.formBuilder.group({
      address: new FormArray([this.createItem]),
    });
  }
  get createItem(): FormGroup {
    return this.formBuilder.group({
      streetAddress: new FormControl(''),
      city:new FormControl(''),
      state:new FormControl('')
    })
  }

  onSubmit() {
    this.output = this.dynamicFormGroup.controls['address'].value;
    }

    addNewAddress(): void {
      (this.dynamicFormGroup.get('address') as FormArray).push(this.createItem);
    }
    removeAddress(index: number) {
      this.AddressInfo.removeAt(index);
    }
    get formControllers() {
      return this.dynamicFormGroup.controls;
    }
    get AddressInfo() {
      return this.formControllers['address'] as FormArray;
    }
}
