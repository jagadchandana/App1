import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CustomerComponent } from './component/customer/customer.component';
import { ItemComponent } from './component/item/item.component';
import { SaveCustomerComponent } from './component/customer/inner-item/save-customer/save-customer.component';
import { UpdateCustomerComponent } from './component/customer/inner-item/update-customer/update-customer.component';
import { DeletaCustomerComponent } from './component/customer/inner-item/deleta-customer/deleta-customer.component';
import { GetCustomerComponent } from './component/customer/inner-item/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './component/customer/inner-item/get-all-customers/get-all-customers.component';
import { SaveItemComponent } from './component/item/inner-item/save-item/save-item.component';
import { UpdateItemComponent } from './component/item/inner-item/update-item/update-item.component';
import { DeleteItemComponent } from './component/item/inner-item/delete-item/delete-item.component';
import { GetItemComponent } from './component/item/inner-item/get-item/get-item.component';
import { GetAllItemComponent } from './component/item/inner-item/get-all-item/get-all-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemComponent,
    SaveCustomerComponent,
    UpdateCustomerComponent,
    DeletaCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent,
    SaveItemComponent,
    UpdateItemComponent,
    DeleteItemComponent,
    GetItemComponent,
    GetAllItemComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
