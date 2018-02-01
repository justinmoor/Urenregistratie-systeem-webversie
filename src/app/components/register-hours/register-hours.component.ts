import { Component, OnInit } from '@angular/core';
import { HourRegister } from '../../models/hour-register';
import { User } from '../../models/user';
import { HoursService } from '../../services/hours.service';
import { Customer } from '../../models/customer';
import { Project } from '../../models/project';
import { Subject } from '../../models/subject';
import { Data } from '@angular/router/src/config';
import {noUndefined} from '@angular/compiler/src/util';

@Component({
  selector: 'app-register-hours',
  templateUrl: './register-hours.component.html',
  styleUrls: ['./register-hours.component.css']
})


export class RegisterHoursComponent implements OnInit {
  registered: boolean = false;
  categoryAdded: boolean = false;
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
  customerName: string;
  projectName: string;
  subjectName: string

  customer: Customer = new Customer;
  project: Project = new Project;
  subject: Subject = new Subject;

  fout:boolean = false;
  opgeslagen:boolean=false;

  constructor(private hourservice:HoursService) {
    this.getCustomers();

    this.getDate();
    this.setstartTime();
    this.setEndTime();
  }

  ngOnInit() {
  }

  addCategory() {
    this.hourservice.addCategory(this.customerName, this.projectName, this.subjectName);
    this.customerName = null;
    this.projectName = null;
    this.subjectName = null;
    this.categoryAdded = true;
  }

  public registerHours() {
    if (this.hour.startingTime < this.hour.endingTime) {
      this.hourservice.setHour(this.hour);
      this.empty();
      this.setstartTime();
      this.setEndTime();
      this.getCustomers();
      this.opgeslagen = true;
    }
    
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

  public getCustomers() {
    this.hourservice.getCustomers().subscribe(customers =>{
      this.customers=customers;
      });
  }

  public setDate(startingDate) {
    this.hour.startingDate = startingDate;
  }

  public setTime() {
    this.getDate();
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
    this.setTime();
    this.hour.setEndTime(this.time)
  }

  public getDate() {
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
  }


  public setProjects() {
    this.hour.projectName = null;
    this.hour.subjectName = null;
  }


  public empty() {
    this.hour.customerName = null;
    this.projectName = null;
    this.subjectName = null;
    this.hour.comment = ""
    this.hour.customerName=""
    this.hour.projectName=""
    this.hour.subjectName=""
  }
}
