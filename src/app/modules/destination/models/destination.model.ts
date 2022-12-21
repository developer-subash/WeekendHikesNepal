import { UserResponse } from '../../auth/models/user.model';

export interface DestinationResponse {
  _id: string;
  title: string;
  bannerImg: string;
  startingPoint: string;
  endPoint: string;
  duration: string;
  length: string;
  maximumAltitude: string;
  grade: string; //[Easy, moderator, hard ]
  highlightDestination: string;
  briefOverview: string;
  trailBreakDown: string;
  difficulties: string;
  packThings: string;
  hotelAccomodation: string;
  transportation: string;
  // map: string;
  pointToRemember: string;
  reviews: string;
  tags: Array<string>;
  createdBy?: UserResponse;
  createdAt?: Date;
  updatedAt?: Date;
  tblOfContents: [
    {
      [key: string]: String;
    }
  ];
}

export interface TagResponse {
    _id: string,
    title: string,
    type: string,
}
