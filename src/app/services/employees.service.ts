import { Injectable } from '@angular/core';

import { Employee } from '../employees/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

	employees:Employee[] = [
	  	{
		  	id:'1',
			name:'Mohammed',
			age:22,
			avatar:'https://www.w3schools.com/w3images/avatar2.png',
			address:['sohag','tahta','25']
	  	},
	  	{
		  	id:'2',
			name:'Fahd',
			age:23,
			avatar:'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
			address:['sohag','maragha','27']
	  	},
	  	{
		  	id:'3',
			name:'Ali',
			age:24,
			avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPRCvXQJKmljRctLnk0f1wuHHUPOm_opTVzA&usqp=CAU',
			address:['sohag','tama','29']
	  	}

	  ];

  constructor() {}

  getAllEnployees ()
  {
  	return [...this.employees]
  }

  getEmployeeInfo (employeeId : string)
  {
	  	return {
	  		...this.employees.find( emp => {
	  			return emp.id === employeeId;
	  		})
	  	}

  }

}
