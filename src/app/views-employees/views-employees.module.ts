import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewsEmployeesPageRoutingModule } from './views-employees-routing.module';

import { ViewsEmployeesPage } from './views-employees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewsEmployeesPageRoutingModule
  ],
  declarations: [ViewsEmployeesPage]
})
export class ViewsEmployeesPageModule {}
