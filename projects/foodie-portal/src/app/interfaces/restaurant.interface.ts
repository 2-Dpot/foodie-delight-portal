export interface Restaurant {
  name: string;
  description: string;
  location: string;
  logo: string;
  menu: string[];
  rating: number;
  reviews: string[];
}

type RestaurantDetail = Restaurant;
export type { RestaurantDetail };