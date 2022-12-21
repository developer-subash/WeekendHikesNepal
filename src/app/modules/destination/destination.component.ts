import { Component, OnInit } from '@angular/core';
import { DesinationService } from './services/desination.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor(
    private readonly destinationService: DesinationService
  ) { }

  ngOnInit(): void {
    this.fetchDestinationTags();
  }
  private fetchDestinationTags() {
    this.destinationService.fetchDestinationTags()
    .pipe(take(1))
    .subscribe(() => {});
  }
}
