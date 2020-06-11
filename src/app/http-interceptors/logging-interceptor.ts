import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const start = Date.now();
        let ok:string;

        return next.handle(req)
        .pipe(
            tap(
                event => ok = event instanceof HttpResponse ? 'success' : '',
                error => ok = 'failed'
            ),
            finalize(()=>{
                const elapsed = Date.now() - start;
                const message = `${req.method} "${req.urlWithParams}" 
                    ${ok} in ${elapsed} ms.`;
                console.log(message);
            })
        );
    }
}