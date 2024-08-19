import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order/order.component';
import { LoginComponent } from './login/login/login.component';
import { ErrorComponent } from './error/error/error.component';
import { ProductComponent } from './product/product/product.component';
import { NgModule } from '@angular/core';
import { GenderPipe } from '../customPipe/genderPipe.pipe';
import { ItemComponent } from './item/item/item.component';
import { ItemviewComponent } from './item/itemview/itemview.component';
import { ItemeditComponent } from './item/itemedit/itemedit.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

export const routes: Routes = [
    {path:"login",component: LoginComponent},
    {path:"product",component: ProductComponent},
    {path:"order",component: OrderComponent},
    {path:"item", 
        component:ItemComponent,
        children:[
            {path:"view",component:ItemviewComponent},
            {path:"edit",component:ItemeditComponent}
        ]
    },
    {path:"dynamicform",component:DynamicFormComponent},
    {path:"**",component: ErrorComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations:[]
  })
  export class AppRoutingModule { }
