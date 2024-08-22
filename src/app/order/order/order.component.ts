import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit ,AfterViewInit{
  messageHere!:string
  constructor() {
    
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit():void{
    this.messageHere = "value from child Component to parent component using Viewchild";
  }
}
