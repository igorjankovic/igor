import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor( private router: Router){
  }

   ngOnInit() {
    
  }

showAccommodationTypes() {
    this.router.navigate(['/accommodationTypeList']);
}

 addAccommodation() {
    this.router.navigate(['/addAccommodation']);
  }
}
