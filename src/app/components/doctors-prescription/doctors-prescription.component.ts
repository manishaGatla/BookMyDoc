import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-prescription',
  templateUrl: './doctors-prescription.component.html',
  styleUrls: ['./doctors-prescription.component.scss']
})
export class DoctorsPrescriptionComponent implements OnInit {
  @Input() patient: any;
  prescription: any ={
    medicineName: null,
    dosage: null,
    duration:null,
    timesPerDay : null,
    nextVisitDate: null
  }
  constructor(){}


  ngOnInit():void{

  }

  handleFileInput(event: any) {
  }

  submitPrescription() {
    
  }

}
