import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchRequestComponent } from './search-request/search-request.component'

const routes: Routes = [
  {
    path: 'requests',
    component: SearchRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
