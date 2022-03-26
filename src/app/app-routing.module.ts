import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppendingAppointmentsComponent } from './kamis/appending-appointments/appending-appointments.component';
import { BookAppointmentComponent } from './kamis/book-appointment/book-appointment.component';
import { DoctorHomeComponent } from './kamis/doctor-home/doctor-home.component';
import { DoctorInfoComponent } from './kamis/doctor-info/doctor-info.component';
import { KamisComponent } from './kamis/kamis.component';
import { LoginPageComponent } from './kamis/login-page/login-page.component';
import { PatientInfoComponent } from './kamis/patient-info/patient-info.component';
import { SignupPageComponent } from './kamis/signup-page/signup-page.component';


const routes: Routes = [
  { path: 'patientInfo', component : PatientInfoComponent},
  { path: 'doctorInfo', component : DoctorInfoComponent},
  { path: 'viewAppendingApp', component : AppendingAppointmentsComponent },
  { path: 'login', component : LoginPageComponent},
  { path: 'signUp', component : SignupPageComponent},
  { path: 'bookAppointment', component : BookAppointmentComponent},
  { path: 'findDoctor', component : KamisComponent},
  { path: 'doctorHome', component : DoctorHomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }