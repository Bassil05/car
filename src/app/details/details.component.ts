import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  public newCar:any;

  constructor(private route : ActivatedRoute){
    this.route.queryParams.subscribe(carsData => this.newCar=carsData)
  }
  
}
