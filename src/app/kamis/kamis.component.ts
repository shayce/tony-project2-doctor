import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kamis',
  templateUrl: './kamis.component.html',
  styleUrls: ['./kamis.component.css']
})
export class KamisComponent implements OnInit {
 
    finddoctor!: FormGroup;
  
    constructor() {     
    
      }
    
      ngOnInit(): void {
        this.finddoctor= new FormGroup({
          specialty: new FormControl('',Validators.required),
          locatoin : new FormControl('',Validators.required),
          insurance : new FormControl('',Validators.required),
        
    })
      }
    
      displaySelectedInfo()
      {
        console.log(this.finddoctor.value)
      }
    }
    
  