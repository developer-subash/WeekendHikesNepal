import { TestBed } from '@angular/core/testing';

import { AutheticationInterceptor } from './authetication.interceptor';

describe('AutheticationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutheticationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutheticationInterceptor = TestBed.inject(AutheticationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
