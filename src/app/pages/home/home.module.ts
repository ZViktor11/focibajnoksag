import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatCardModule,ContainerModule,
    PipeModule

  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
