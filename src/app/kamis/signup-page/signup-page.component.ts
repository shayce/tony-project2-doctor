import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  
  signUp!: FormGroup;

  constructor() {     
  
    }
  
    ngOnInit(): void {
      this.signUp = new FormGroup({
        doctorName: new FormControl('',Validators.required),
        reason: new FormControl('',Validators.required),
        location: new FormControl('',Validators.required),
        Insurance: new FormControl('',Validators.required),
        Time: new FormControl('',Validators.required),
  })
    }
  
    displayUserInfo()
    {
      console.log(this.signUp.value)
    }
  }