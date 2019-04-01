import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

import {LineItemComponent} from './line-item/line-item.component';
import { OrderComponent } from './order/order.component';
import { OrderService, ConsoleLogger, Logger, HttpLogger, BASE_API_URL} from './core';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent,  LineItemComponent, OrderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [OrderService,
  {provide:Logger, useClass:ConsoleLogger},
  {provide:BASE_API_URL, useValue:'https://reqres.in/api/'}
  ]
})
export class AppModule { }
