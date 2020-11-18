import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsEmployeesPage } from './views-employees.page';

const routes: Routes = [
  {
    path: '',
    component: ViewsEmployeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsEmployeesPageRoutingModule {}
