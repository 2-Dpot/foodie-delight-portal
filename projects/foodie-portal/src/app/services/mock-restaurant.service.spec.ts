import { TestBed } from '@angular/core/testing';

import { MockRestaurantService } from './mock-restaurant.service';

describe('MockRestaurantService', () => {
  let service: MockRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
