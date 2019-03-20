import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './landing/home/home.component';
import { FeaturesComponent } from './landing/features/features.component';
import { FooterComponent } from './landing/footer/footer.component';
import { WeDoComponent } from './landing/we-do/we-do.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    FooterComponent,
    WeDoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    FooterComponent,
    WeDoComponent
  ]
})
export class ComponentsModule { }
