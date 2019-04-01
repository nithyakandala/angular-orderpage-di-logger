import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

import {LineItemComponent} from './line-item/line-item.component';
import { OrderComponent } from './order/order.component';
import { OrderService, Logger, HttpLogger} from './core';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent,  LineItemComponent, OrderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [OrderService,
  {provide:Logger, useClass:HttpLogger}
  ]
})
export class AppModule { }
