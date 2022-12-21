export interface UserResponse {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  lastLoginDate: Date;
  roles: Array<any>;
  createdAt: Date;
  updatedAt: Date;
  __v: 0;
}

export interface LoginResponse {
    user: UserResponse,
    accessToken: string,
    refreshToken: string,
}

export interface LoginRequest {
    email: string,
    password: string
}