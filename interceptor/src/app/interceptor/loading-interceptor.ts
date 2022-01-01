import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const spinnerSubscribe: Subscription = this.loadingService.showSpinner();
        return next.handle(req).pipe((finalize(() => spinnerSubscribe.unsubscribe())))
    }
}