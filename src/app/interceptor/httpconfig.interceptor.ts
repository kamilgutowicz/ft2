import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';

@Injectable({
    providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private alertify: AlertifyService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`Request made to `+ request.url);

        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error);
                    console.log(error);

                    this.alertify.error(errorMessage);
                    return throwError(errorMessage);
                })
        );
    }

    setError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error occured';
        if(error.error instanceof ErrorEvent){
            errorMessage = error.error.message;
        } else {
            if(error.status!==0){
                errorMessage = error.error;
            }
        }
        return errorMessage;
    }
}