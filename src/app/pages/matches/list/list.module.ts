import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddModule } from '../add/add.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContainerModule } from './../../../shared/components/container/container.module';
import { CardModule } from '../card/card.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UpdateModule } from '../update/update.module';
import { MatchListRoutingModule } from './match-list-routing.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
     MatchListRoutingModule,
     MatToolbarModule,
     MatButtonModule,
     MatIconModule,
     AddModule,
     FormsModule,
     MatInputModule,
     ReactiveFormsModule,
     ContainerModule,
     CardModule,
     UpdateModule,
     MatAutocompleteModule,
     MatProgressSpinnerModule,
     
  ],entryComponents: [ListComponent],
  exports: [ListComponent],
})
export class ListModule { }
