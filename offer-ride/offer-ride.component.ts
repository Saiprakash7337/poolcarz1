import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit{

  isBooked!: boolean;
  submit = false;

  onBook() {
    this.submit = true;
    this.isBooked = true;
   }


   public carRegister! : FormGroup;

   constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
 
   }
 
   ngOnInit(): void {
     this.carRegister = this.formBuilder.group({
       fname:['', Validators.required],
       startloc:['', Validators.required],
       dest:['', Validators.required],
       carn:['', Validators.required],
       seatavail:['', Validators.required]
     })
   }
 
   registerCar() {
 
     this.http.post<any>("http://localhost:3000/carregister", this.carRegister.value)
     .subscribe(res=>{
       alert("Registration Successfull");
       this.carRegister.reset();
 
       this.router.navigate(['login']);
     }, err=>{
       alert("Something went wrong");
     })
   }
}
