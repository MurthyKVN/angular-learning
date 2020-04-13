import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCountryWiseComponent } from './world/view-country-wise/view-country-wise.component';


const routes: Routes = [
  {
    path: 'country-wise',
    component: ViewCountryWiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
