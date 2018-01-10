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

  date:string;
  constructor(private hourservice:HoursService) { 
<<<<<<< HEAD
    this.dag = this.datum.getDate().toString();
    this.maand = (this.datum.getMonth() + 1).toString();
    this.jaar = this.datum.getFullYear().toString();

    this.date = this.jaar + "-" + this.maand + "-" + this.dag

    console.log(this.date)
=======
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
    this.date = ""+ this.year.toString() +"-" + this.month.toString()+ "-"+ this.day.toString();
    console.log(this.date)



  //  this.hourservice.getDate().subscribe(date =>{
  //    this.today = date;
  //  });
   
   console.log(this.today);
>>>>>>> 3ed344999faa3d1b528e221d376866933ba3beb3
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