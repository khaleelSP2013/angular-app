
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {  Injectable, Optional } from "@angular/core";
import { Observable } from "rxjs";
import { IStudent } from "../student";
import * as jsonData from "../app/assets/db.json";
@Injectable({
    providedIn:"root"
})
export class StudentService{
    
    private URL = 'https://jsonplaceholder.typicode.com/users';
    
    constructor(private http:HttpClient) {
    }

    getStudents():Observable<IStudent[]>{
            return this.http.get<IStudent[]>(this.URL);
    }
}