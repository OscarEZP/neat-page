import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './landing/home/home.component';
import { FeaturesComponent } from './landing/features/features.component';
import { FooterComponent } from './landing/footer/footer.component';
import { WeDoComponent } from './landing/we-do/we-do.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardActionsComponent } from './landing/card-actions/card-actions.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    FooterComponent,
    WeDoComponent,
    CardActionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    FooterComponent,
    WeDoComponent,
    CardActionsComponent

  ]
})
export class ComponentsModule { }
