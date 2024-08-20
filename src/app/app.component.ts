import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../sevices/student.service';
import { IStudent } from '../student';
import { FormBuilder, FormControl, FormGroup, FormsModule,  ReactiveFormsModule,  Validators } from '@angular/forms';
import { AppRoutingModule, routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
 imports: [RouterOutlet,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RouterModule],
  providers:[StudentService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  myform: FormGroup | any;
  title = '';
  studendData:IStudent[]=[]
 
  constructor(private _studentService:StudentService,private _fb:FormBuilder) {
    this.myform=this._fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      age:['',[Validators.required]],
    })
  }
  // isPromise=new Promise<string>((resolve,reject)=>{
  //   console.log("Promise start")
  // })
  // myObservable=new Observable((e=>{
  //   console.log('Observable start')
	// e.next("a");
	// e.next("b");
	// e.next("c");
  // }))

  ngOnInit(): void {
    // this.myObservable.subscribe((val)=>{
    //   console.log(val)
    // })
    this._studentService.getStudents().subscribe((data)=>{
      this.studendData=data
    })
  }

  onSubmit(){
    console.log(this.myform)
  }

  get name() {
    return this.myform.get('name')!;
  }
  get age() {
    return this.myform.get('age')!;
  }

}
