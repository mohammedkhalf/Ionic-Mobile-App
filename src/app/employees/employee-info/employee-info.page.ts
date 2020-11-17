import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Employee } from '../employee.model';

import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.page.html',
  styleUrls: ['./employee-info.page.scss'],
})
export class EmployeeInfoPage implements OnInit {

   employeeInfoDetails:Employee 
	
  constructor( private activatedRoute:ActivatedRoute , private employeesService:EmployeesService ) { }

  ngOnInit() {
  	this.activatedRoute.paramMap.subscribe(paramMap=>{

  		if(!paramMap.has('employeeId')){ return }

  		const employeeId = paramMap.get('employeeId')

  		this.employeeInfoDetails = this.employeesService.getEmployeeInfo(employeeId)

  	})
  }

}
