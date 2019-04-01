import { Component, OnInit } from '@angular/core';
import {LineItem} from '../core';
import {OrderService} from '../core';
import {Observable} from 'rxjs';

import{MiniLogger} from '../core';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
lineItems:Observable<LineItem[]>;

  constructor(private orderService:OrderService, private miniLogger:MiniLogger) { }

  ngOnInit() {
    this.lineItems=this.orderService.lineItems;
  

  }
  onLineItemSaved(lineItem:LineItem){
    this.miniLogger.log('received lineitem saved message', lineItem)
    this.orderService.saveLineItem(lineItem);
  }

}