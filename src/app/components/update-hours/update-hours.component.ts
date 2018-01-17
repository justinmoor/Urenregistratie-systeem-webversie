import { Component, OnInit } from '@angular/core';
import { HourRegister } from '../../models/hour-register';
import { Customer } from '../../models/customer';
import { Project } from '../../models/project';
import { Subject } from '../../models/subject';
import { HoursService } from '../../services/hours.service';

@Component({
  selector: 'app-update-hours',
  templateUrl: './update-hours.component.html',
  styleUrls: ['./update-hours.component.css']
})
export class UpdateHoursComponent implements OnInit {
  hour: HourRegister = new HourRegister;
  customers: Customer[];
  projects: Project[];
  subjects: Subject[];
  today: Date;
  year: number;
  month;
  day;
  date: string;
  timeHour;
  timeMinute;
  time;
  customer: Customer = new Customer;
  project: Project = new Project;
  subject: Subject = new Subject;
  fout: boolean = false;

  constructor(private hourservice: HoursService) {
    this.getProjects();
    this.getSubjects();
    this.getCustomers();
  }

  ngOnInit() {
  }
  public setDate(startingDate) {
    this.hour.startingDate = startingDate;
  }
  public getSubjects() {
    this.hourservice.getSubjects(this.hour.projectName, this.hour.customerName).subscribe(subject => {
      this.subjects = subject;
    });
  }
  public getProjects() {
    this.hourservice.getProjects(this.hour.customerName).subscribe(project => {
      this.projects = project;
    });
  }
  public getCustomers(){
    this.hourservice.getCustomers().subscribe(customers =>{
      this.customers=customers;})
  }
  public setTime() {
    this.getDate();
    this.time = null;
    this.timeHour = this.today.getHours();
    this.timeMinute = this.today.getMinutes();
    if (this.timeHour < 10) {
      this.timeHour = 0 + "" + this.timeHour;
    }
    if (this.timeMinute < 10) {
      this.timeMinute = 0 + "" + this.timeMinute;
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
    this.hour.endingTime = this.time;
    console.log(this.hour);
  }
  public setProjects() {
    this.hour.projectName = null;
    this.hour.subjectName = null;
  }
  public getDate() {
    this.today = new Date();
  }

  public updateHour() {
    console.log(this.hour);
    this.hourservice.updateHour(this.hour);
  }

}
