import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { OrderComponent } from './order/order.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AdminComponent,
    OrderComponent,
    MovieComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
