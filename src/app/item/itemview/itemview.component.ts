import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemview',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './itemview.component.html',
  styleUrl: './itemview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemviewComponent {
  @Input() person: Person | undefined;
}

export interface Person {
  name: string;
  age: number;
}