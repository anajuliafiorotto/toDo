import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogingooglePageRoutingModule } from './logingoogle-routing.module';

import { LogingooglePage } from './logingoogle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogingooglePageRoutingModule
  ],
  declarations: [LogingooglePage]
})
export class LogingooglePageModule {}
