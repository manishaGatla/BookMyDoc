import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  constructor(){}
  hospitals: any =[];
  doctors: any =[];
  timeSlots: any =[];
  selectedDate: any;
  selectedTimeSlot: boolean = false;
  selectedDoctor: any ;
  selectedHospital: any;
  selectedHospitalLocation: any;
  paymentDetails : any ={
    cardNumber: null
  }
  ngOnInit():void{

  }


  submitAppointment(){

  }

  onHospitalChange(){
    
  }
}
