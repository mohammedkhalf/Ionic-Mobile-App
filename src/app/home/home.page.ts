import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name ="my name mohammed khalaf"

  constructor() {
  }

  changeName()
  {
  	this.name = "this is ionic app"
  }



}
