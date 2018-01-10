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
  customers:Customer[];
  projects:Project[];
  subjects:Subject[];
  today;
  year;
  month;
  day;

  date:string;

  constructor(private hourservice:HoursService) { 
    this.hourservice.getCustomers().subscribe(customer =>{
    this.customers=customer;
    });

    this.today = new Date();

    this.year = this.today.getFullYear();
    this.month = this.today.getMonth() + 1;
    if(this.month < 10){
      this.month = 0 +"" + this.month;
    }
    this.day = this.today.getDate();
    if(this.day < 10){
      this.day = 0 +"" + this.day;
    }
    this.hour.startingDate = ""+ this.year.toString() +"-" + this.month.toString()+ "-"+ this.day.toString();

    console.log(this.hour.startingDate)
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

  public getDate(){
    console.log(this.hour.startingDate)
  }

}