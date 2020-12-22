import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../services/employees.service';

import { Employee } from '../employees/employee.model';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  employees:Employee[];

  constructor( private employeesService:EmployeesService ) { }

  ngOnInit() {
  	this.employees = this.employeesService.getAllEmployees();
  }

}
