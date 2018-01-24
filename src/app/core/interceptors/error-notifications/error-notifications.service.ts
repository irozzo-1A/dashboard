import { NotificationActions } from 'app/redux/actions/notification.actions';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorNotificationsInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
        .do(
          event => {},
          errorInstance => {
            if (errorInstance) {
              NotificationActions.error(
                `Error ${errorInstance.status}`,
                `${errorInstance.message || errorInstance.statusText}`
              );
            }
          }
        );
  }
}