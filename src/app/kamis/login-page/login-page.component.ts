import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userName !: string
  userPassword !: string

  constructor() { }

  ngOnInit(): void {
  }

  displayUserDetails(values:any){
    console.log(values);
  }

}
