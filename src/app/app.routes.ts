 import {Routes} from '@angular/router'
 import {HomeComponent} from './home/home.component'
 import {AboutComponent} from './about/about.component'
 import {RestaurantsComponent} from './restaurants/restaurants.component'
import { RestarantDetailComponent } from './restarant-detail/restarant-detail.component';
import { MenuComponent } from './restarant-detail/menu/menu.component';
import { ReviewsComponent } from './restarant-detail/reviews/reviews.component';
 

 export const ROUTES: Routes = [
    {path: ''               , component: HomeComponent},
    {path: 'about'          , component: AboutComponent},
    {path: 'restaurants'    , component: RestaurantsComponent} ,
    {path: 'restaurants/:id', component: RestarantDetailComponent,
        children:[
                    {path: '', redirectTo:'menu'   , pathMatch:'full'},
                    {path: 'menu'   , component: MenuComponent},
                    {path: 'reviews', component: ReviewsComponent} 
                 ]
    }   

 ];