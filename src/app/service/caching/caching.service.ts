import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor() { }
  isCachable(req:HttpRequest<any>):boolean{
    return true;
  }
  get(req:HttpRequest<any>) :HttpResponse<any>{
    return null;
  }
}
