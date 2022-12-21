import { Component, OnInit } from '@angular/core';
import { DesinationService } from '../../services/desination.service';
import { take } from 'rxjs';
import {
  DestinationResponse,
  TagResponse,
} from '../../models/destination.model';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-destination-create',
  templateUrl: './destination-create.component.html',
  styleUrls: ['./destination-create.component.css'],
})
export class DestinationCreateComponent implements OnInit {
  public tagList: Array<string> = ['Tag One', 'Tag Two', 'Tag Three'];
  items = [
    {
      productId: 446,
      artName: 'CASUAL',
      shoppifyFlag: false,
      productPrice: 32.0,
    },
    {
      productId: 459,
      artName: 'test',
      shoppifyFlag: false,
      productPrice: 37.0,
    },
    {
      productId: 461,
      artName: 'test',
      shoppifyFlag: false,
      productPrice: 54.0,
    },
    {
      productId: 465,
      artName: 'test2212',
      shoppifyFlag: false,
      productPrice: 88.0,
    },
    {
      productId: 469,
      artName: 'test444',
      shoppifyFlag: false,
      productPrice: 57.0,
    },
  ];
  item = 469;

  protected destinationTags: Array<TagResponse> = [];
  protected tags: Array<string> = [];
  protected emptyTitle = 'You must enter a destination Title';
  protected emptyStartingPointTitle = 'You must enter a starting Point';
  protected emptyEndPointTitle = 'You must enter a starting Point';
  protected emptyReviewsTitle = 'You must enter a Reviews';
  protected emptyPointToRememberTitle = 'You must enter a Point To Remember';
  protected emptyTransportationTitle = 'You must enter a Transportation';
  protected emptyHotelAccomadationTitle =
    'You must enter a HotelAccomadationTitle';
  protected emptyPackThingsTitle = 'You must enter a Pack Things';
  protected emptyDifficultiesTitle = 'You must enter a Difficulties';
  protected emptyTrailBreakDownTitle =
    'You must enter a Trail Break down Title';
  protected emptyBriefOverviewTitle = 'You must enter a Brief Overview';
  protected emptyHighlightDestinationTitle =
    'You must enter a Highlight Destination';
  protected emptyGradeTitle = 'You must enter a Grade';
  protected emptyMaximumAltitudeTitle = 'You must enter a Maximum Altitude';
  protected emptyLengthTitle = 'You must enter a Length';
  protected emptyDurationTitle = 'You must enter a Duration';
  protected imageError = '';
  destinationForm: FormGroup;
  protected imageSrc: string = '';
  protected destinationDetails = {};
  constructor(
    private readonly destinationService: DesinationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.destinationForm = this.formBuilder.group({
      title: ['', Validators.required],
      startingPoint: ['', Validators.required],
      endPoint: ['', Validators.required],
      duration: ['', Validators.required],
      length: ['', Validators.required],
      maximumAltitude: ['', Validators.required],
      grade: ['', Validators.required],
      highlightDestination: ['', Validators.required],
      briefOverview: ['', Validators.required],
      trailBreakDown: ['', Validators.required],
      packThings: ['', Validators.required],
      difficulties: ['', Validators.required],
      hotelAccomodation: ['', Validators.required],
      transportation: ['', Validators.required],
      pointToRemember: ['', Validators.required],
      reviews: ['', Validators.required],
      tags: [[''], Validators.required],
      bannerImg: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    /** check wether it is edit or create  */
    this.subscribedDestinationTags();
    this.checkEditOrCreate();
    // this.subscribedDetinationDetails();
  }
  subscribedDetinationDetails(destinationId: string) {
    // this.destinationService.destinationDetails$.subscribe(
    //   (res: <destinationDe) => {
    //     this.destinationForm.controls['tags'].setValue(res);
    //     this.destinationTags = res;
    //   }
    // );
    this.destinationService.fetchDestinationDetail(destinationId)
    .subscribe();
  }
  checkEditOrCreate() {
    let destinationId: string;
    if (this.destinationService.getQueryParamsByKey('destinationId') || '') {
      destinationId =
        this.destinationService.getQueryParamsByKey('destinationId');
      this.subscribedDetinationDetails(destinationId);
    }
  }

  subscribedDestinationTags() {
    this.destinationService._destinationTags$.subscribe(
      (res: Array<TagResponse>) => {
        this.destinationForm.controls['tags'].setValue(res);
        this.destinationTags = res;
      }
    );
  }

  destinationCreateAction() {
    this.destinationService.createDestination;
  }
  get fb() {
    return this.destinationForm.controls;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const max_height = 15200;
    const max_width = 25600;

    const reader = new FileReader();

    if (this.checkImageSize(file) != '') {
      this.imageError = this.checkImageSize(file);
      return false;
    } else if (this.checkImageExtension(file) != '') {
      this.imageError = this.checkImageExtension(file);
    }
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.destinationForm.patchValue({
        bannerImg: reader.result,
      });
      this.imageSrc = reader.result as string;
    };
    this.destinationForm.get('bannerImg')?.updateValueAndValidity();
    return;
  }

  checkImageSize(file: any): string {
    return this.destinationService.checkImageSize(file);
  }

  checkImageExtension(file: any): string {
    return this.destinationService.checkImageExtension(file);
  }

  showPreview(event: any) {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      this.imageSrc = src;
    }
  }
}
