import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-doctors-list-view',
  templateUrl: './admin-doctors-list-view.component.html',
  styleUrls: ['./admin-doctors-list-view.component.scss']
})
export class AdminDoctorsListViewComponent implements OnInit {

  constructor(){}
  doctors : any =[];

  ngOnInit():void{

  }

  approveDoctor(doctor: any){

  }

  rejectDoctor(doctor: any){
    
  }
}
