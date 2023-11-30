import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminDoctorsListViewComponent } from './components/admin-doctors-list-view/admin-doctors-list-view.component';
import { DoctorPatientslistViewComponent } from './components/doctor-patientslist-view/doctor-patientslist-view.component';
import { DoctorsPrescriptionComponent } from './components/doctors-prescription/doctors-prescription.component';
import { AdminAppointmentsComponent } from './components/admin-appointments/admin-appointments.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    AdminDoctorsListViewComponent,
    DoctorPatientslistViewComponent,
    DoctorsPrescriptionComponent,
    AdminAppointmentsComponent,
    BookAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
