import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isVisible = true;
  twdbData: string;

  constructor() { }

  ngOnInit() {
  }

 onSubmit(form: NgForm) {
    console.log("Somthing");
    
    form.reset();
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }

}
