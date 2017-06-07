import { Component, OnInit,Input } from '@angular/core';
import {Country} from './contry.model';
@Component({
  selector: 'app-contry',
  templateUrl: './contry.component.html',
  styleUrls: ['./contry.component.css']
})
export class ContryComponent implements OnInit {
 
  @Input() country:Country
  constructor() { }

  ngOnInit() {
  }

}
