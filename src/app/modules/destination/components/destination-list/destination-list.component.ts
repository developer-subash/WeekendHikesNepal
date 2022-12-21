import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { DestinationResponse } from '../../models/destination.model';
import { DesinationService } from '../../services/desination.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  public destinations: Array<DestinationResponse> = [];
  constructor(
    private readonly destinationService: DesinationService
  ) { }

  ngOnInit(): void {
    this.fetchDestination();
  }

  private fetchDestination() {
    this.destinationService.fetchDestination()
    .subscribe((res : ApiResponse<Array<DestinationResponse>>) => {
      this.destinations = res.data;
    })
  }

}
