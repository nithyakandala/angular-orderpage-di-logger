import {Component, Input, Output, EventEmitter} from '@angular/core';
import {LineItem, Logger} from '../core';
import {LineItemService} from './line-item.service';
@Component({
  selector:'app-line-item',
  templateUrl:'./line-item.component.html',
  providers:[LineItemService]
  })
export class LineItemComponent{
  constructor(private lineItemService: LineItemService, private logger:Logger){

  }
  @Output()
  lineItemSaved=new EventEmitter<LineItem>();
@Input()
set lineItem(lineItem: LineItem){
  this.logger.logDebug('received line item')
  this.lineItemService.lineItem = lineItem;
  }
get lineItem(){
  return this.lineItemService.lineItem;
}
onSave(){
  this.logger.logDebug('saving')
  this.lineItemService.saveLineItem(this.lineItem);
  (this.lineItem);
  this.lineItemSaved.emit(this.lineItemService.lineItem);
}
onCancel(){
  this.lineItemService.restoreLineItem();
  this.logger.logDebug('restored', this.lineItem)
}
}