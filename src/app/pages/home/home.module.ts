import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class HomeModule { }