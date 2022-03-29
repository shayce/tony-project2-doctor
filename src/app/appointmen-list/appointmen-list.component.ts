import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppendingAppointmentsComponent } from '../kamis/appending-appointments/appending-appointments.component';
import { mergeMap } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-appointmen-list',
  templateUrl: './appointmen-list.component.html',
  styleUrls: ['./appointmen-list.component.css']
})
export class AppointmenListComponent implements OnInit {

    public loading = true;
    public errorMsg!: string;
    public successMsg!: string;
    public appointments!: Appointment[];
    public columns = ['appointmentDate', 'name', 'email', 'cancel'];

    
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments()
    .subscribe((appointments: Appointment[]) =>{
      this.appointments = appointments;
      this.loading = false;
    }, 
    (error: ErrorEvent) =>{
      this.errorMsg = error.error.message;
      this.loading = false;
    });
  }

    cancelAppointment(id: string){
      pipe(
        mergeMap(() => this.appointmentService.getAppointments())
      ),
      subscribe((appointments: Appointment[]) =>{
        this.appointments = appointments;
        this.successMsg = 'Successfully Cancelled the Appointment'
      },
      (error: ErrorEvent) =>{
        this.errorMsg = error.error.message;
      })
    }
}
function subscribe(arg0: (appointments: Appointment[]) => void, arg1: (error: ErrorEvent) => void) {
  throw new Error('Function not implemented.');
}

