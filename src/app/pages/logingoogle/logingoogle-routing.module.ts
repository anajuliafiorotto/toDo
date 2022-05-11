import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogingooglePage } from './logingoogle.page';

const routes: Routes = [
  {
    path: '',
    component: LogingooglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogingooglePageRoutingModule {}
