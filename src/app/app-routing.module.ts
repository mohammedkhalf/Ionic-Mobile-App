import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'views-employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    children:[
      {
        path:'',
        loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
      },
      {
        path: ':employeeId',
        loadChildren: () => import('./employees/employee-info/employee-info.module').then( m => m.EmployeeInfoPageModule)
      }
    ]
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
  {
    path: 'views-employees',
    loadChildren: () => import('./views-employees/views-employees.module').then( m => m.ViewsEmployeesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
