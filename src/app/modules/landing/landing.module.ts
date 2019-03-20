import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
      LandingComponent
  ],
  imports: [
      ComponentsModule
  ],
  providers: [],
})
export class LandingModule { }
