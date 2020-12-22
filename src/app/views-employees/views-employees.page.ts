import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-views-employees',
  templateUrl: './views-employees.page.html',
  styleUrls: ['./views-employees.page.scss'],
})
export class ViewsEmployeesPage implements OnInit {
  
  employees = [];

  constructor(private employeeService:EmployeeService)  { }

  ngOnInit() {

    this.fetchEmployees()
    let employeesRes = this.employeeService.getEmployeeList()
    employeesRes.snapshotChanges().subscribe(res=>{  
      this.employees = []
      res.forEach(item=>{
        let itemsArr = item.payload.toJSON()  //push every itemObject in itemsArray
        itemsArr['$key'] = item.key
        this.employees.push(itemsArr as Employee)
      }) //forEach
    }) //emplyeesRes

  }

  fetchEmployees()
  {
    this.employeeService.getEmployeeList().valueChanges().subscribe(res=>{
      console.log(res)
    })
  }

  deleteEmployee(id)
  {
    // console.log(id)
    if(window.confirm('Are sure delete ?'))
    {
      this.employeeService.deleteEmployee(id)
    }
  }

}
