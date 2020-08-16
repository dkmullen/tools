import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BmiComponent } from './bmi.component';
import { BmiRoutingModule } from './bmi-routing.module';

@NgModule({
  declarations: [
    BmiComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BmiRoutingModule
  ]
})
export class BmiModule { }