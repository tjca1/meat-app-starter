import { Restaurant } from "./restaurant/restaurant.model";

export class RestaurantsService{
constructor(){}

rest:Restaurant[] = [
    {
      id:"id"                       ,
      name:"1"                      ,
      category:"c at"               ,
      deliveryEstimate:"tempo de entrega Injeção"                 ,
      rating:4.5                                           ,
      imagePath:"assets/img/restaurants/breadbakery.png"   ,
      about:"about"                 ,
      hours:"hours"                

    },
    {
      id:"id"                       ,
      name:"2"                      ,
      category:"c at"               ,
      deliveryEstimate:"devlvery"   ,
      rating:4.5                    ,
      imagePath:"assets/img/restaurants/breadbakery.png"            ,
      about:"about"                 ,
      hours:"hours"                
 
     }
    
  ]
restaurants():Restaurant[]{
      return this.rest;
}

}