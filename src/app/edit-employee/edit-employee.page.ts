import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {

  updateEmployeeForm: FormGroup;
  id:any;

  constructor(private employeeService:EmployeeService,private router:Router,private actRoute:ActivatedRoute,private fb:FormBuilder) 
  {
    this.id = this.actRoute.snapshot.paramMap.get('id');  //get id from url
    this.employeeService.getEmployee(this.id).valueChanges().subscribe(res=>{
    this.updateEmployeeForm.setValue(res);
    })
  }

  ngOnInit() 
  {
    this.updateEmployeeForm = this.fb.group({
  		name:[''],
  		email:[''],
  		mobile:[''],
  		details:['']
    }) 
  }

  updateForm()
  {
	  	this.employeeService.UpdateEmployee(this.id,this.updateEmployeeForm.value)
	  	.then(()=>{
	  			this.router.navigate(['/views-employees'])
	  	}).catch(error=>console.log(error))
  }


}
