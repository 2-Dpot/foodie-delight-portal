import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceUrlConstants } from '../constants/apis/service-url.config';
import { Restaurant, RestaurantDetail } from '../interfaces/restaurant.interface';
import { CustomHttpClient } from '../core/services/custom-http-client.service';
import { RestaurantDataCore } from '../interfaces/restaurantDataMain.interface';

@Injectable()
export class RestaurantService implements RestaurantDataCore {

  #http = inject(CustomHttpClient);

  getRestaurants(): Observable<Restaurant[]> {
    return this.#http.superGet(serviceUrlConstants.GET_RESTAURANTS.url);
  }

  getRestaurant(restaurantID: number): Observable<Restaurant> {
    return this.#http.superGet<Observable<Restaurant>>(serviceUrlConstants.GET_RESTAURANT_BY_ID.url + String(restaurantID || ''));
  }

  addRestaurant(retaurant: RestaurantDetail): Observable<Restaurant[]> {
    return this.#http.superPost<Observable<Restaurant[]>>(serviceUrlConstants.ADD_RESTAURANT.url, retaurant);
  }

  updateRestaurant(restaurantID: number, retaurant: RestaurantDetail): Observable<Restaurant[]> {
    return this.#http.put<Restaurant[]>(serviceUrlConstants.UPDATE_RESTAURANT.url + String(restaurantID || ''), retaurant);
  }

  deleteRestaurant(retaurantID: number): Observable<Restaurant[]> {
    return this.#http.delete<Restaurant[]>(serviceUrlConstants.DELETE_RESTAURANT.url + String(retaurantID || ''));
  }
}