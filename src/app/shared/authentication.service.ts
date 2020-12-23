import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument  } from "@angular/fire/firestore";
import { Router  } from "@angular/router";
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	
  userData : any;

  constructor(
  	public afStore:AngularFirestore,
  	public ngFireAuth:AngularFireAuth,
  	public router:Router
  ) 
  {
		//we get user data from auth or not
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
	
		//login
		signIn(email:string , password:string)
		{
			return this.ngFireAuth.signInWithEmailAndPassword(email,password);
		}

		//register
		registerUser(email:string , password:string)
		{
			return this.ngFireAuth.createUserWithEmailAndPassword(email,password);
		}

		// check if user is login
		get isLoggedIn() : boolean {
			const user =  JSON.parse(localStorage.getItem('user'))
			return (user !== null) ? true : false
		}

		//store user in fireStore 
		setuserData(user:any)
		{
			//connect with fire base using this path
			const useRef : AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.id}`)
			const userData : User = {
				uid: user.uid,
				email: user.email,
				name:  user.name,
				displayName: user.displayName,
				photoURL: user.photoURL,
			}

			return useRef.set(userData,{
				merge : true
			})

		}

		//logout
		signOut()
		{
			return this.ngFireAuth.signOut().then(()=>{
					localStorage.removeItem('user')
					this.router.navigate(['login'])
			})
		}
}
