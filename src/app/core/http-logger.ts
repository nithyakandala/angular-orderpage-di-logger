import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Logger} from './logger';

@Injectable({providedIn:'root'})
export class HttpLogger extends Logger{
  private baseApiUrl='https://reqres.in/api/';
  constructor(private $http:HttpClient){
    super();
  }
  log(message:string){
   this.logWithLevel(message, 'Warning');
  }
  logInfo(message:string){
    this.logWithLevel(message, 'Info');
  }
  
  logDebug(message:string){
    this.logWithLevel(message, 'Debug');
  }
  logWithLevel(message:string, level:string){
    this.$http.post(`${this.baseApiUrl}log`,{message,level}).subscribe(s=>console.log('logger server response', s));

  }
}