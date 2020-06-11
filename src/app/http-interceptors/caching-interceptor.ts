import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { CachingService } from '../service/caching/caching.service';
import { of } from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor{
    constructor(private cache:CachingService){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        if(!this.cache.isCachable(req)){
            return next.handle(req);
        }

        const cachedResponse = this.cache.get(req);
        return cachedResponse ? of(cachedResponse) : next.handle(req);
    }

}