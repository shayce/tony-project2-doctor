import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
 
  bookAppointment!: FormGroup;

  constructor() {     
  
    }
  
    ngOnInit(): void {
      this.bookAppointment = new FormGroup({
        doctorName: new FormControl('',Validators.required),
        reason: new FormControl('',Validators.required),
        location: new FormControl('',Validators.required),
        Insurance: new FormControl('',Validators.required),
        Time: new FormControl('',Validators.required),
  })
    }
  
    displaySelectedInfo()
    {
      console.log(this.bookAppointment.value)
    }
  }