import { Component, inject } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { MockRestaurantService } from '../../services/mock-restaurant.service';
import { CustomTableComponent } from "../../shared/custom-table/custom-table.component";
import { CommonModule } from '@angular/common';
import { Column } from '../../interfaces/table-column.interface';

@Component({
    selector: 'app-restaurants',
    standalone: true,
    templateUrl: './restaurants.component.html',
    styleUrl: './restaurants.component.scss',
    providers: [{ provide: RestaurantService, useClass: MockRestaurantService }],
    imports: [CommonModule, CustomTableComponent]
})
export class RestaurantsComponent {
  #restaurantService = inject(RestaurantService);
  restaurants$ = this.#restaurantService.getRestaurants();

  cols: Column[] = [
    {
      field: 'name',
      header: 'Name'
    },
    {
      field: 'description',
      header: 'Description'
    },
    {
      field: 'location',
      header: 'Location'
    },
    {
      field: 'logo',
      header: 'Logo'
    },
    // {
    //   field: 'menu',
    //   header: 'Menu'
    // },
    {
      field: 'rating',
      header: 'Rating'
    },
    // {
    //   field: 'reviews',
    //   header: 'Reviews'
    // }
  ]
}
