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
  updatedHour: Hours;

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
<<<<<<< HEAD
    
=======
>>>>>>> 8d7afe1207255653d6e905d59d9280ed845f5ec0
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
    console.log(this.hour.customerName, this.hour.projectName, "yess");
    this.service.getSubjects(this.hour.projectName, this.hour.customerName).subscribe(subject => {
      this.subjects = subject;

      console.log(this.customers, this. projects, this.subjects);
    });
  }

  private setProjects() {
    this.projects = null;
    this.subjects = null;
  }

<<<<<<< HEAD
=======
  public saveHour(){
    console.log(this.hour);
    this.service.updateHour(this.hour)
  }

>>>>>>> 8d7afe1207255653d6e905d59d9280ed845f5ec0
  addCategory() {
    this.service.addCategory(this.customerName, this.projectName, this.subjectName);
  }
}
