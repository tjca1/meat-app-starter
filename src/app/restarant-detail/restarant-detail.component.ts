import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restarant-detail',
  templateUrl: './restarant-detail.component.html'
})
export class RestarantDetailComponent implements OnInit {
   
  restaurant:Restaurant
  constructor(private restaurantsService:RestaurantsService, private route:ActivatedRoute) {

   }

  ngOnInit() {
    let id_:string = this.route.snapshot.params['id'];
    console.log(id_)
    this.restaurantsService.restaurantById(id_).subscribe(restaurant => this.restaurant = restaurant );
  }

}
