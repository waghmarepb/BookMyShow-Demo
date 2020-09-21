import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowmovieComponent } from './showmovie/showmovie.component';
import { BookshowComponent } from './bookshow/bookshow.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';


const routes: Routes = [
  {
    path:'', component:ShowmovieComponent
  },
  {
    path:'bookshow/:id', component:BookshowComponent
  },
  {
    path:'confirm', component:ConfirmBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
