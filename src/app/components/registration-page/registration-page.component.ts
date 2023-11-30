import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  constructor(){}
  confirmPassword: any = null;
  user: any ={
    name : null,
    email : null,
    password: null,
    phoneNumber: null,
    age: null,
    gender: null,
    role: null,
    specialization: null,
    address: null,
    bankName: null,
    accountNumber : null,
    routingNumber: null,
    accountHolderName: null
  };
  ngOnInit(): void {
  }

}
