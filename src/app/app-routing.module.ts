import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminDoctorsListViewComponent } from './components/admin-doctors-list-view/admin-doctors-list-view.component';
import { DoctorPatientslistViewComponent } from './components/doctor-patientslist-view/doctor-patientslist-view.component';
import { DoctorsPrescriptionComponent } from './components/doctors-prescription/doctors-prescription.component';
import { AdminAppointmentsComponent } from './components/admin-appointments/admin-appointments.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';

const routes:Routes = [
  { path: 'register', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  {path:'doctors', component:AdminDoctorsListViewComponent},
  {path:'patients', component:DoctorPatientslistViewComponent},
  {path:'prescriptions', component:DoctorsPrescriptionComponent},
  {path:'appointments', component:AdminAppointmentsComponent},
  {path:'bookAppointment', component:BookAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
