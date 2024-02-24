import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true,
      headers: new HttpHeaders().append('api-key', environment['apiKey']),
    });
    return next.handle(request);
  }
}

export const credentialsInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CredentialsInterceptor,
  multi: true,
};