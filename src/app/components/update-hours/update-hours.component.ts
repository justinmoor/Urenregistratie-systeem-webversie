import { Component, OnInit } from '@angular/core';
import { HourRegister } from '../../models/hour-register';
import { Customer } from '../../models/customer';
import { Project } from '../../models/project';
import { Subject } from '../../models/subject';
import { HoursService } from '../../services/hours.service';
import { Hours } from '../../models/hours';

@Component({
  selector: 'app-update-hours',
  templateUrl: './update-hours.component.html',
  styleUrls: ['./update-hours.component.css']
})
export class UpdateHoursComponent implements OnInit {
 
  hour: Hours;

  customers: Customer[];
  projects: Project[];
  subjects: Subject[];

  customerName: string;
  projectName: string;
  subjectName: string;

  constructor(private service: HoursService) {

    this.hour = this.getHours();
    this.getCustomers();
    this.getProjects();
    this.getSubjects();
    
  }

  ngOnInit() {
  }

  private getHours():Hours{
    return JSON.parse(sessionStorage.getItem("hourToChange"));
  }

  private getCustomers() {
    this.service.getCustomers().subscribe(customers =>{
      this.customers=customers;
      });
  }

  private getProjects() {
    console.log(this.hour.customerName, "yess");
    this.service.getProjects(this.hour.customerName).subscribe(project => {
      this.projects = project;
    });
  }

  private getSubjects() {
    this.service.getSubjects(this.hour.projectName, this.hour.customerName).subscribe(subject => {
      this.subjects = subject;
    });
  }

  private setProjects() {
    this.hour.projectName = null;
    this.hour.subjectName = null;
  }

  addCategory() {
    this.service.addCategory(this.customerName, this.projectName, this.subjectName);
  }
}
