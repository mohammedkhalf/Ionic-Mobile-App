import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-views-employees',
  templateUrl: './views-employees.page.html',
  styleUrls: ['./views-employees.page.scss'],
})
export class ViewsEmployeesPage implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }

}
