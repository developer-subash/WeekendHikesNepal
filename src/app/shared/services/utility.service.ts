import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './../models/api-response.model';
import { LoginResponse } from 'src/app/modules/auth/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute
  ) {}
  rootURL = 'http://127.0.0.1:4000/api/v1/';

  public callApi<T, A>(
    url: string,
    method: string = 'get',
    headers = {},
    payload: T
  ) {
    if (method === 'get')
      return this.http.get<A>(this.rootURL + url, { headers: headers });
    else
      return this.http.post<A>(this.rootURL + url, payload, {
        headers: headers,
      });
  }

  public checkImgSize(file: any): string {
    const max_size = 20971520;
    let msg = '';
    if (file.size > max_size)
      msg = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';

    return msg;
  }

  public checkImageExtension(file: any): string {
    const allowed_types = ['image/png', 'image/jpeg'];
    const img_extension = file.type;
    let msg = '';
    if (allowed_types.includes(img_extension))
      msg = 'Only Images are allowed ( JPG | PNG )';

    return msg;
  }

  public getQueryParamsByKey(keyName: string): string {
    let data: string = '';
    if (this.checkQueryParamsByKey(keyName))
      data = this.route.snapshot.queryParamMap.get(keyName) as string;
    return data;
  }
  public checkQueryParamsByKey(keyName: string): boolean {
    return this.route.snapshot.queryParamMap.has(keyName);
  }
}
