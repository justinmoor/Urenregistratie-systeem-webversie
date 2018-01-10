import { Component, OnInit } from '@angular/core';
import { HourRegister } from '../../models/hour-register';
import { User } from '../../models/user';
import { HoursService } from '../../services/hours.service';
import { Customer } from '../../models/customer';
import { Project } from '../../models/project';
import { Subject } from '../../models/subject';
import { Data } from '@angular/router/src/config';

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
  today:Date;
  year:number;
  month;
  day;
  date:string;
  timeHour;
  timeMinute;
  time;

  customer: Customer = new Customer;
  project: Project = new Project;
  subject: Subject = new Subject;

  constructor(private hourservice:HoursService) { 

    this.hourservice.getCustomers().subscribe(customer =>{
    this.customers=customer;
    });

    this.today = new Date();
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth() + 1;
    this.day = this.today.getDate();
    if(this.month < 10){
      this.month = 0 +"" + this.month;
    }
    if(this.day < 10){
      this.day = 0 +"" + this.day;
    }
    this.date = ""+ this.year.toString() +"-" + this.month.toString()+ "-"+ this.day.toString();
    this.hour.startingDate = this.date;

    this.setstartTime();
    this.setEndTime();
  }

  ngOnInit() {
  }

  addCategory() {
    // if (klant input > 0) addCustomer() 
    // if (project input > 0) addProject() 
    // if (subject input > 0) addSubject()
  }

  public saveHour() {
    console.log(this.hour);
    this.hourservice.setHour(this.hour);
  }

  public getProjects() {
    this.hourservice.getProjects(this.hour.customerName).subscribe(project => {
      this.projects = project;
    });
  }

  public getSubjects() {
    this.hourservice.getSubjects(this.hour.projectName, this.hour.customerName).subscribe(subject => {
      this.subjects = subject;
    });
  }

  public setDate(startingDate) {
    this.hour.startingDate= startingDate;
  }

  
  public setTime() {
    this.time = null;
    this.timeHour = this.today.getHours();
    this.timeMinute = this.today.getMinutes();
    if(this.timeHour < 10){
      this.timeHour = 0 +"" + this.timeHour;
    }
    if(this.timeMinute < 10){
      this.timeMinute = 0 +"" + this.timeMinute;
    }
    this.time = "" + this.timeHour + ":" + this.timeMinute; 
  }

  public setstartTime() {
    this.setTime();
    this.hour.startingTime = this.time;
  }

  public setEndTime() {
    console.log("fire>>>>>>");
    this.setTime();
    console.log(this.time);
    this.hour.setEndTime(this.time)
    console.log(this.hour);
  }



  public setProjects() {
    this.hour.projectName = null;
    this.hour.subjectName = null;
  }



}