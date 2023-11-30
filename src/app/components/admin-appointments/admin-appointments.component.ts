import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.scss']
})
export class AdminAppointmentsComponent implements OnInit {

  constructor(){}
  appointments: any =[];

  ngOnInit():void{

  }

}
