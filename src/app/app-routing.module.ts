import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
    // loadChildren: './modules/landing/landing.module#LandingModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
