import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'genderPrefix'
  })
export class GenderPipe implements PipeTransform{
    transform(value: string, ) {

        let transformValue = "";
    
        if(value) {
    
        let gender = value === "M" ? "MR" : "Mrs."
    
        transformValue  = gender + value;
    
        } else {
    
            transformValue  = '';
    
        }
    
        return transformValue
    
    }
    
} 