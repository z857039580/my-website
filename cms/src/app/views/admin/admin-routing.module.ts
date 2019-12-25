import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AdminComponent} from './admin.component';
import {OrderComponent} from './order/order.component';
import {MovieComponent} from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'movie',
        component: MovieComponent,
      },
      {path: '', component: OrderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
