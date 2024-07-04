import { Observable } from "rxjs";
import { Restaurant, RestaurantDetail } from "./restaurant.interface";

export interface RestaurantDataCore {
  getRestaurants: () => Observable<Restaurant[]>;
  getRestaurant: (restaurantID: number) => Observable<Restaurant>;
  addRestaurant: (retaurant: RestaurantDetail) => Observable<Restaurant[]>;
  updateRestaurant: (restaurantID: number, retaurant: RestaurantDetail) => Observable<Restaurant[]>;
  deleteRestaurant: (restaurantID: number) => Observable<Restaurant[]>; 
}