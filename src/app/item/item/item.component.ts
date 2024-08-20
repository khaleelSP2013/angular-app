import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomdirectiveDirective } from '../../customdirective/customdirective.directive';
import { CommonModule } from '@angular/common';
import { ItemviewComponent, Person } from "../itemview/itemview.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterModule, CustomdirectiveDirective, CommonModule, ItemviewComponent,FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  public person: Person = {
    name: 'Khaleel Ahmed',
    age: 35
  };
  personlist=[
    {name:"khaleel",gender:"M"},
    {name:"Ahmed",gender:"F"}
  ]

  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }
}
