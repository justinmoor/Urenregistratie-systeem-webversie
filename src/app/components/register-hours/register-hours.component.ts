import { Component, OnInit } from '@angular/core';
import { HourRegister } from '../../models/hour-register';
import { User } from '../../models/user';
import { HoursService } from '../../services/hours.service';
import { Customer } from '../../models/customer';
import { Project } from '../../models/project';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-register-hours',
  templateUrl: './register-hours.component.html',
  styleUrls: ['./register-hours.component.css']
})


export class RegisterHoursComponent implements OnInit {

  hour:HourRegister = new HourRegister;
<<<<<<< HEAD
  datum:Date = new Date();
  dag:string;
  maand:string;
  jaar:string;
=======
  customers:Customer[];
  projects:Project[];
  subjects:Subject[];
  today;
  year;
  month;
  day;

  date:string;
>>>>>>> 3ed344999faa3d1b528e221d376866933ba3beb3

  constructor(private hourservice:HoursService) { 
   
  }
  

  ngOnInit() {
  }

  public saveHour(){
    console.log(this.hour);
    this.hourservice.setHour(this.hour);
  }

  public getProjects() {
    this.hourservice.getProjects(this.hour.customerName).subscribe(project => {
      this.projects=project;
    })
  }

  public getSubjects() {
    this.hourservice.getSubjects(this.hour.projectName, this.hour.customerName).subscribe(subject => {
      this.subjects = subject;
    });
  }

}