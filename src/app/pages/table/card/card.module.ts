import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,MatCardModule, MatIconModule, MatButtonModule,MatFormFieldModule
  ],exports: [CardComponent]
})
export class CardModule { }