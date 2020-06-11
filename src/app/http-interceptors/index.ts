import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NoopInterceptor } from "./noop-interceptor";
import { CachingInterceptor } from './caching-interceptor';
import { LoggingInterceptor } from './logging-interceptor';

export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass:NoopInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: CachingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},
];