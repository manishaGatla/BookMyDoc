import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-patientslist-view',
  templateUrl: './doctor-patientslist-view.component.html',
  styleUrls: ['./doctor-patientslist-view.component.scss']
})
export class DoctorPatientslistViewComponent implements OnInit {

  constructor(){}
  patients : any =[];

  ngOnInit():void{

  }


  addPrescription(patient: any) {
   
  }
}
