import { Injectable } from '@angular/core';
import { BehaviorSubject, take, tap, Observable } from 'rxjs';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { DestinationResponse, TagResponse } from '../models/destination.model';
import { ApiResponse } from 'src/app/shared/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class DesinationService {
  private readonly _destinations = new BehaviorSubject<
    Array<DestinationResponse>
  >([]);

  private readonly _destinationDetails = new BehaviorSubject<DestinationResponse|any>({});

  private readonly _destinationTags = new BehaviorSubject<Array<TagResponse>>([]);
  public destinations$ = this._destinations.asObservable();
  public destinationDetails$ = this._destinationDetails.asObservable();
  public _destinationTags$ = this._destinationTags.asObservable();
  constructor(private readonly utilityService: UtilityService) {}

  public fetchDestination = (): Observable<
    ApiResponse<Array<DestinationResponse>>
  > => {
    return this.utilityService
      .callApi<Array<any>, ApiResponse<Array<DestinationResponse>>>(
        'destination',
        'get',
        {},
        []
      )
      .pipe(
        take(1),
        tap((response: ApiResponse<Array<DestinationResponse>>) => {
          this.updateDestinations(response.data);
        })
      );
  };

  public updateDestinations(destinations: Array<DestinationResponse>) {
    this._destinations.next(destinations);
  }

  public updateDestinationDetail(destinations: DestinationResponse) {
    this._destinationDetails.next(destinations);
  }

  public fetchDestinationDetail(destinationId: string): Observable<ApiResponse<DestinationResponse>> {
    return this.utilityService
      .callApi<Array<any>, ApiResponse<DestinationResponse>>(
        `destination/${destinationId}`,
        'get',
        {},
        []
      )
      .pipe(
        take(1),
        tap((res: ApiResponse<DestinationResponse>) => {
          console.log("destinationdetails",res.data);
          this.updateDestinationDetail(res.data);
        })
      );
  }

  public fetchDestinationTags(): Observable<ApiResponse<Array<TagResponse>>> {
    return this.utilityService
      .callApi<Array<any>, ApiResponse<Array<TagResponse>>>(
        'tag?type=destination',
        'get',
        {},
        []
      )
      .pipe(
        take(1),
        tap((res: ApiResponse<Array<TagResponse>>) => {
          this.updateTags(res.data);
        })
      );
  }

  public updateTags(tags: Array<TagResponse>) {
    this._destinationTags.next(tags);
  }

  public createDestination() {
    // this.utilityService.callApi()
  }

  public checkImageSize(file: any): string {
   return this.utilityService.checkImgSize(file);
  }

  public checkImageExtension(file: any): string {
   return this.utilityService.checkImageExtension(file);
  }

  public getQueryParamsByKey(key: string): string {
    return this.utilityService.getQueryParamsByKey(key);
  }

  public checkQueryParamsByKey(key: string): boolean {
    return this.utilityService.checkQueryParamsByKey(key);
  }

}
