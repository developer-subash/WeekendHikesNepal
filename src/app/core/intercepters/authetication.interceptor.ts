import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class AutheticationInterceptor implements HttpInterceptor {

  constructor(
    private readonly authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(request));
  }


  /**
   * Handles to fetch accessToken
   * @param request
   * @returns HttpRequest<Headers>
   */
  addAuthToken(request: HttpRequest<any>): HttpRequest<Headers> {
    const token: (string | null) = this.authService.getAuthToken();

    return request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
    })
  }
}
