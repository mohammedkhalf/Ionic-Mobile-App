import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireStore  } from "@angular/fire/firestore";
import { Router  } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	
  userData : any;

  constructor(
  	public afstore:AngularFireStore,
  	public ngFireAuth:AngualarFireAuth,
  	public router:Router
  ) 
  {
  	this.ngFireAuth.authState.subscribe(user =>{
  		if(user)
  		{
  			this.userData = user;
  			localStorage.setItem('user',JSON.stringify(this.userData))
  			JSON.parse(localStorage.getItem('user'))
  		}
  		else
  		{
  			localStorage.setItem('user',null)
  			JSON.parse(localStorage.getItem('user'))
  		}
  	})
  }

  
}
