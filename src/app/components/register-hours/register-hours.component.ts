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

  hour: HourRegister = new HourRegister;
  customers: Customer[];
  projects: Project[];
  subjects: Subject[];

  customer: Customer = new Customer;
  project: Project = new Project;
  subject: Subject = new Subject;

  constructor(private hourservice: HoursService) {
    this.hourservice.getCustomers().subscribe(customer => {
    this.customers = customer;
    });
    // this.hoursService.getAll().subscribe(hours => {
      // this.hours = hours;
    // });
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
}
