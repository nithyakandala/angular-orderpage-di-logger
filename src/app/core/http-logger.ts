import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Logger} from './logger';
import {BASE_API_URL} from './token';

@Injectable({providedIn:'root'})
export class HttpLogger extends Logger{

  constructor(private $http:HttpClient, @Inject(BASE_API_URL) private baseApiUrl){
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