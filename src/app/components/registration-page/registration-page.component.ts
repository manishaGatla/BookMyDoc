import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendConnectionServiceService } from 'src/app/services/backend-connection-service.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  constructor(public service: BackendConnectionServiceService, private router: Router){}
  confirmPassword: any = null;
  isPhoneNumberValid: boolean = true;
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
    accountHolderName: null,
    selectedHospital: null
    

  };
  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;
  showMisMatchError: boolean = false;


    
  ngOnInit(): void {
  }

  registerUser(){
    if(this.user.role == 'doctor' ){
      this.service.addDoctor({details:this.bindReqBody()}).subscribe((res)=>{
        this.router.navigateByUrl('/login');
      })
    }
    else{
      this.service.addPatient({details:this.bindReqBody()}).subscribe((res)=>{
        this.router.navigateByUrl('/login');
      })
    }
  }

  validatePhoneNumber(event: Event) {
    if((event.target as HTMLInputElement).value != null){
    const inputValue = (event.target as HTMLInputElement).value;
    const phoneNumberPattern = /^[0-9]{10}$/;
    this.isPhoneNumberValid = phoneNumberPattern.test(inputValue);
    }
}

isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email != null  && email != "" ? emailRegex.test(email) : true;
}


  getHospitalLocation(){
    if(this.user.selectedHospital){
      return this.service.hospitals.find((hospital: any)=> hospital._id == this.user.selectedHospital ).address;
    }
  }

  bindReqBody(){
    if(this.user.role == "doctor"){
      return {
        name : this.user.name,
        email : this.user.email,
        password: this.user.password,
        phoneNumber: this.user.phoneNumber,
        age: this.user.age,
        gender: this.user.gender,
        address: this.user.address,
        specialization: this.service.specializations.find((hospital: any)=> hospital._id == this.user.specialization ).name,
        bankName: this.user.bankName,
        accountNumber : this.user.accountNumber,
        routingNumber: this.user.routingNumber,
        accountHolderName: this.user.accountHolderName,
        hospital: this.service.hospitals.find((hospital: any)=> hospital._id == this.user.selectedHospital ).name,
        hospitalId: this.user.selectedHospital,
        isApproved:0
      }
    }
    else{
      return {
        name : this.user.name,
        email : this.user.email,
        password: this.user.password,
        phoneNumber: this.user.phoneNumber,
        age: this.user.age,
        gender: this.user.gender,
        address: this.user.address,
       
      };
    }
  }

  togglePasswordVisibility(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility(){
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }
}
