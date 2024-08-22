import { Component, ViewChild } from '@angular/core';
import { OrderComponent } from '../../order/order/order.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [OrderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @ViewChild(OrderComponent)
  child!: { messageHere: string | null; };

  messageHere!:string | null;

ngAfterViewInit(){
  this.messageHere= this.child.messageHere;
}
}
