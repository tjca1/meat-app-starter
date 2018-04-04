import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router'
import { Reviews } from './reviews.model';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  
   reviews:Reviews[]

  constructor(private restaurantsService:RestaurantsService,private route:ActivatedRoute) { }

  ngOnInit() {
      let id_:string = this.route.parent.snapshot.params['id'];
      this.restaurantsService.reviewsOfRestaurant(id_).
      subscribe(restaurants => this.reviews = restaurants);

  }

}
