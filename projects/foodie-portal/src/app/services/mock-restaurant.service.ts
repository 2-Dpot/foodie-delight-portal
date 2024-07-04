import { Injectable } from '@angular/core';
import { RestaurantDataCore } from '../interfaces/restaurantDataMain.interface';
import { Observable, of } from 'rxjs';
import { Restaurant, RestaurantDetail } from '../interfaces/restaurant.interface';
import { restaurants } from '../constants/mock-data/restaurant';

@Injectable()
export class MockRestaurantService implements RestaurantDataCore {

  constructor() { }
  getRestaurants(): Observable<Restaurant[]> {
    return of(restaurants);
  }

  getRestaurant(restaurantID: number): Observable<Restaurant> {
    return of(restaurants[3]);
  }

  addRestaurant(retaurant: RestaurantDetail): Observable<Restaurant[]> {
    return of(restaurants);
  }

  updateRestaurant(restaurantID: number, retaurant: RestaurantDetail): Observable<Restaurant[]> {
    return of(restaurants);
  }

  deleteRestaurant(retaurantID: number): Observable<Restaurant[]> {
    return of(restaurants);
  }
}
