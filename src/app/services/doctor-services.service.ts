import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


//calls the Java Api
const doctorURL = "http://localhost:5050/doctor"

@Injectable({
  providedIn: 'root'
})
export class DoctorServicesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor (private http: HttpClient) { }

  rootURL = '/api';

  getdoctors()
  {
    return this.http.get(this.rootURL + '/doctors');
  }
  

}
