import { Injectable } from '@angular/core';
import { Hours } from '../models/hours';
import { HourRegister } from '../models/hour-register';
import { ApiService } from './api.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import { Customer } from '../models/customer';
import { Project } from '../models/project';
import { Subject } from '../models/Subject';
  

@Injectable()
export class HoursService {
  user:User[]
  id: number = this.getActiveUserId();
  hour:HourRegister;
  constructor(private api: ApiService) {
  }

  public getAll(): Observable<Hours[]> {
  
    console.log(this.id);
    return this.api.getUrenVanUser<Hours[]>(this.id);
  }

  private getActiveUserId() {
    sessionStorage.getItem('activeUser');
    let user: User = JSON.parse(sessionStorage.getItem('activeUser'));
    console.log(user.personeelID)
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
  

}

