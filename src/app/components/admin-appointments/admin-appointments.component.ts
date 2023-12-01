import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendConnectionServiceService } from 'src/app/services/backend-connection-service.service';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.scss']
})
export class AdminAppointmentsComponent implements OnInit {

  constructor(public service: BackendConnectionServiceService, private router: Router){}
  appointments: any =[];
  isRescheduleClicked:boolean= false;
  selectedTimeslot: any;
  selectedDate: any;
  schedules: any =[];
  slots: any  = [];
  prescriptionViewed : boolean = false;
  appointmentToViewPresc:any = null;
  prescriptions: any =[];

  ngOnInit():void{
    this.getAppointments();

  }

  getAppointments(){
    this.service.getAppointments(this.service.isPatient || this.service.isDoctor ? this.service.user._id : null, this.service.isDoctor ? true: false).subscribe((res)=>{
      this.appointments = res;
      this.appointments.forEach((res: any)=>{
        res.isRescheduleClicked = false;
      })
    })
  }

  updateAppointment(appointment: any , status: any){
    var body ={
      _id: appointment._id,
      status: status
    }
    this.service.updateAppointmentStatus(body).subscribe((res)=>{
      this.getAppointments();
    })
  }

  RescheduleClicked(appointment: any){
    appointment.isRescheduleClicked = true;
    this.selectedDate = new Date(appointment.selectedDate);
    this.selectedTimeslot = appointment.selectedTimeslot;
  }

  cancelReschedule(appointment: any){
      appointment.isRescheduleClicked = false;
      this.selectedDate = null;
      this.selectedTimeslot = null;
      this.slots = [];
      this.schedules = [];
  }

  onSelectedDateChange(appointment: any){
    this.service.getschedulesByDate(this.selectedDate, appointment.doctorId).subscribe((res)=>{
      this.schedules = res;
      this.generateSlots();
    })
  }

  generateSlots(): void {
    this.schedules.forEach((schedule: any)=>{
      const startTime = new Date(`${schedule.date} ${schedule.startTime}`);
      const endTime = new Date(`${schedule.date} ${schedule.endTime}`);

      let currentTime = startTime;
  
      while (currentTime < endTime) {
        this.slots.push(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        currentTime.setMinutes(currentTime.getMinutes() + 30);
      }
    })
    
  }

  submitReschedule(appointment: any){
    var body ={
      _id: appointment._id,
      date:this.selectedDate,
      timeSlot: this.selectedTimeslot ,
      status:"Rescheduled"
    }
    this.service.updateAppointmentSchedule(body).subscribe((res)=>{
      this.getAppointments();
      this.selectedDate = null;
      this.selectedTimeslot = null;
    })
  }

  addPrescription(appointment: any) {
    this.service.appointmentToBePrescribed  = appointment;
    this.router.navigateByUrl('/prescriptions');
  }

  viewPrescription(appointment: any ){
    this.prescriptionViewed = true;
    this.service.getPrescriptionDetails(appointment._id).subscribe((res)=>{
      this.prescriptions = res;
    })
  }

  backClicked(){
    this.prescriptionViewed = false;
    this.prescriptions = [];
  }

}
