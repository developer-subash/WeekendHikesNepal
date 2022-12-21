import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import {
  LoginRequest,
  LoginResponse,
  UserResponse,
} from './../models/user.model';
import { UtilityService } from './../../../shared/services/utility.service';
import { ApiResponse } from 'src/app/shared/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _user = new BehaviorSubject<UserResponse | any>({});
  public user$ = this._user.asObservable();
  constructor(private readonly utilityService: UtilityService) {}

  public user(item: UserResponse) {
    this._user.next(item);
  }

  public login = (email: string, password: string) : Observable<ApiResponse<LoginResponse>> => {
    const payload = { email: email, password: password };
    return this.utilityService
      .callApi<LoginRequest, ApiResponse<LoginResponse>>(
        'user/login',
        'post',
        {},
        payload
      )
      .pipe(
        take(1),
        tap((userResponse) => {
          this.user(userResponse.data.user);
          this.storeToken(userResponse.data.accessToken, userResponse.data.refreshToken);
        })
      );
  };

  public storeToken(accessToken: string, refreshToken: string): void {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  public getAuthToken(): string | null {
    let token  = localStorage.getItem("accessToken");
    return token;
  }

  public getRefreshToken() {

  }
}
