import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KamisComponent } from './kamis/kamis.component';
import { PatientInfoComponent } from './kamis/patient-info/patient-info.component';
import { DoctorHomeComponent } from './kamis/doctor-home/doctor-home.component';
import { LoginPageComponent } from './kamis/login-page/login-page.component';
import { DoctorInfoComponent } from './kamis/doctor-info/doctor-info.component';
import { SignupPageComponent } from './kamis/signup-page/signup-page.component';
import { AppendingAppointmentsComponent } from './kamis/appending-appointments/appending-appointments.component';
import { BookAppointmentComponent } from './kamis/book-appointment/book-appointment.component';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    KamisComponent,
    PatientInfoComponent,
    DoctorHomeComponent,
    LoginPageComponent,
    DoctorInfoComponent,
    SignupPageComponent,
    AppendingAppointmentsComponent,
    BookAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
