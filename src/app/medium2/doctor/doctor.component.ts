import { Component, OnInit } from '@angular/core';
import {DoctorService} from "./doctor.service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  doctors: any[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  greetDoctor(name: string){
    return `Hello ${name}`;
  }

  getDoctors(){
    this.doctorService.getDoctors()
      .subscribe({
        next: resp => this.doctors = resp
      })
  }

}
