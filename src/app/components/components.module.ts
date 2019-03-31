import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './landing/home/home.component';
import { FeaturesComponent } from './landing/features/features.component';
import { FooterComponent } from './landing/footer/footer.component';
import { WeDoComponent } from './landing/we-do/we-do.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardActionsComponent } from './landing/card-actions/card-actions.component';
import { UserProcessComponent } from './landing/user-process/user-process.component';
import { HowWorkComponent } from './landing/how-work/how-work.component';
import { PlansComponent } from './landing/plans/plans.component';
import { LoginComponent } from './landing/login/login.component';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { TypingAnimationModule } from 'angular-typing-animation';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    FooterComponent,
    WeDoComponent,
    CardActionsComponent,
    UserProcessComponent,
    HowWorkComponent,
    PlansComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNotificationsModule.forRoot(),
    TypingAnimationModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    FooterComponent,
    WeDoComponent,
    CardActionsComponent,
    UserProcessComponent,
    HowWorkComponent,
    PlansComponent,
    LoginComponent

  ]
})
export class ComponentsModule { }
