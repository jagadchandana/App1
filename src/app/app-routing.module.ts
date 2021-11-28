import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./component/customer/customer.component";
import {ItemComponent} from "./component/item/item.component";
import {SaveCustomerComponent} from "./component/customer/inner-item/save-customer/save-customer.component";
import {UpdateCustomerComponent} from "./component/customer/inner-item/update-customer/update-customer.component";
import {DeletaCustomerComponent} from "./component/customer/inner-item/deleta-customer/deleta-customer.component";
import {GetCustomerComponent} from "./component/customer/inner-item/get-customer/get-customer.component";
import {GetAllCustomersComponent} from "./component/customer/inner-item/get-all-customers/get-all-customers.component";
import {SaveItemComponent} from "./component/item/inner-item/save-item/save-item.component";
import {UpdateItemComponent} from "./component/item/inner-item/update-item/update-item.component";
import {DeleteItemComponent} from "./component/item/inner-item/delete-item/delete-item.component";
import {GetItemComponent} from "./component/item/inner-item/get-item/get-item.component";
import {GetAllItemComponent} from "./component/item/inner-item/get-all-item/get-all-item.component";

const routes: Routes = [
  {path:'customer', component: CustomerComponent, children:[
      {path:'save', component:SaveCustomerComponent},
      {path:'update', component:UpdateCustomerComponent},
      {path:'delete', component:DeletaCustomerComponent},
      {path:'get', component:GetCustomerComponent},
      {path:'get-all', component:GetAllCustomersComponent}
    ]},
  {path:'item', component:ItemComponent, children:[
      {path:'save', component:SaveItemComponent},
      {path:'update', component:UpdateItemComponent},
      {path:'delete', component:DeleteItemComponent},
      {path:'get', component:GetItemComponent},
      {path:'get-all', component:GetAllItemComponent},

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
