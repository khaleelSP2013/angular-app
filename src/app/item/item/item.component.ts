import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomdirectiveDirective } from '../../customdirective/customdirective.directive';
import { CommonModule } from '@angular/common';
import { GenderPipe } from '../../../customPipe/genderPipe.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterModule,CustomdirectiveDirective,CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  personlist=[
    {name:"khaleel",gender:"M"},
    {name:"Ahmed",gender:"F"}
  ]
}
