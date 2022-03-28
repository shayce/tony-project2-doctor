import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kamis',
  templateUrl: './kamis.component.html',
  styleUrls: ['./kamis.component.css']
})
export class KamisComponent implements OnInit {
 
    finddoctor!: FormGroup;
    countriesList: any[] = ['Germany', 'Switzerland', 'UAE', 'Pakistan', 'Brazil', 'England'];
    locationlist: any[] = ['Germany', 'Switzerland', 'UAE', 'Pakistan', 'Brazil', 'England'];
    insurancelist: any[] = ['Germany', 'Switzerland', 'UAE', 'Pakistan', 'Brazil', 'England'];

  
    constructor() {     
    
      }
    
      ngOnInit()  {
       
        /*
        this.finddoctor= new FormGroup({
          specialty: new FormControl('',Validators.required),
          locatoin : new FormControl('',Validators.required),
          insurance : new FormControl('',Validators.required),
        
    })
    */
      }
    
      onChange (event: any){
        console.log(event.value);
      }
      
      /*
      displaySelectedInfo()
      {
        console.log(this.finddoctor.value)
      }
      */
    }
  
    