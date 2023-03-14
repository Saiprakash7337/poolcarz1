import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ride-details', 
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent {

 

  ridesDetails = [
    {'id' : 'T102', 'name' : 'Hayley', 'car' : 'BMW X5', 'seat' : '7', 'pickup' : 'Office', 'dest' : 'East-Port'},
    
  ];


}
