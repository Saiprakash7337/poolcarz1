import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';

const routes: Routes = [
  {component: LoginComponent, path: ""},
  {component: BookRideComponent, path: "book-ride"},
  {component: LoginComponent, path: "login"},
  {component: OfferRideComponent, path: "offer-ride"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
