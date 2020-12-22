import { Component, OnInit } from '@angular/core';

import { FormGroup , FormBuilder } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})

export class CreateEmployeePage implements OnInit {

  employeeForm: FormGroup;

  constructor(
  private employeeService:EmployeeService,
  private router:Router,
  private fb:FormBuilder,
  ) 
  {}

  ngOnInit() {
  	this.employeeForm = this.fb.group({
  		name:[''],
  		email:[''],
  		mobile:[''],
  		details:['']
  	})
  }

  formSubmit()
  {
	  	if(!this.employeeForm.valid)
	  	{
	  		return false;
	  	}
	  	else
	  	{
	  		this.employeeService.createEmployee(this.employeeForm.value)
	  		.then(res=>{
	  			console.log(res)
	  			this.employeeForm.reset()
	  			this.router.navigate(['/views-employees'])
	  		})
	  		.catch(error=>console.log(error))
	  	}
  }

}
