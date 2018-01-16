import { Injectable } from '@angular/core';
import { Hours } from '../models/hours';
import { HourRegister } from '../models/hour-register';
import { ApiService } from './api.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import { Customer } from '../models/customer';
import { Project } from '../models/project';
import { Subject } from '../models/Subject';
import { Response } from '@angular/http/src/static_response';
import { error } from 'selenium-webdriver';

@Injectable()
export class HoursService {

  customers:Customer[];
  projects:Project[];
  subjects:Subject[];
  customerExists:boolean;
  projectExists:boolean;
  subjectExists:boolean;
  customer_ID:number;
  project_ID:number;

  user:User[]
  id: number = this.getActiveUserId();
  hour:HourRegister;
  constructor(private api: ApiService) {
  }

  public getAll(): Observable<Hours[]> {
    return this.api.getUrenVanUser<Hours[]>(this.id);
  }

  private getActiveUserId() {
    sessionStorage.getItem('activeUser');
    let user: User = JSON.parse(sessionStorage.getItem('activeUser'));
    return user.personeelID;
  }

  public setHour(hour:HourRegister) {
    this.id  = this.getActiveUserId()
    this.api.setHour(hour,this.id);
  }

  public getCustomers(): Observable<Customer[]> {
    return this.api.getCustomers<Customer[]>();
  }

  public getProjects(CustomerName:String): Observable<Project[]> {
    return this.api.getProjects<Project[]>(CustomerName);
  }

  public getSubjects(projectName:String, customerName:String): Observable<Subject[]> {
    return this.api.getSubjects<Subject[]>(projectName,customerName);
  }

  public setConfirmed(uur){
    this.api.setConfirmed(uur);
  }

  public addCategory(customerName:string, projectName:string, subjectName:string) {
    console.log("hourservice addCategroy",customerName, projectName, subjectName)
    this.customerExists = false;


    this.getCustomers().subscribe( customer =>{
       this.customers = customer;
      
      for(let customer of this.customers) {
        if (customer.customerName.toLocaleLowerCase() === customerName.toLocaleLowerCase()){
          this.customerExists = true;
          console.log(this.customerExists);
          if (this.customerExists){
            this.goFetch(customerName, projectName, subjectName);
          }
        }
      }
      if (this.customerExists === false) {
        this.api.addCustomer(customerName, projectName, subjectName);
      
      }  
    });
  }   

  private goFetch(customerName:string, projectName:string, subjectName:string){
    console.log("hourservice  geFetch",customerName, projectName, subjectName)
    this.projectExists = false;
    this.getProjects(customerName).subscribe(project =>{
      this.projects=project, error => console.log('error projects');
      console.log(this.projects);
      
      for(let project of this.projects) {
        if(project.projectName.toLocaleLowerCase() === projectName.toLocaleLowerCase()) {
          this.projectExists = true;
          console.log(this.projectExists)
          this.getStick(customerName, projectName, subjectName);
        }
      }
      if (this.projectExists === false) {
        this.api.addProject(customerName, projectName, subjectName);
      }
    });
  }

  private getStick(customerName:string, projectName:string, subjectName:string) {
    console.log("hourservice  getStick",customerName, projectName, subjectName)
    this.subjectExists = false;

    this.getSubjects(projectName, customerName).subscribe(subject => {
      this.subjects = subject;

      for (let subject of this.subjects) {
        if (subject.subjectName.toLocaleLowerCase() === subjectName.toLocaleLowerCase()){
          this.subjectExists = true;
          console.log(this.subjectExists);
        }
      }
      if (this.subjectExists === false){
        this.api.addSubject(customerName, projectName, subjectName);
      }
    });
  }
}

