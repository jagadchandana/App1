import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit {

  constructor(private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(data=>{
      console.log(data.get('id'));
      console.log(data.get('name'));
    })

  }

}



















