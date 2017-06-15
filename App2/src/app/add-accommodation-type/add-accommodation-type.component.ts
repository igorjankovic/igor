import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'add-accommodation-type',
  templateUrl: './add-accommodation-type.component.html',
  styleUrls: ['./add-accommodation-type.component.css']
})
export class AddAccommodationTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   onSubmit(form: NgForm) {
   
    form.reset();
  }

}
