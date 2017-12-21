import { Injectable } from '@angular/core';
import { Hours } from '../models/hours';
import { HourRegister } from '../models/hour-register';
import { ApiService } from './api.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';

@Injectable()
export class HoursService {
  user:User[]
  id: number;
  hour:HourRegister;
  constructor(private api: ApiService) {

  }

  public getAll(): Observable<Hours[]> {
    return this.api.getUrenVanUser<Hours[]>(this.getActiveUserId());
  }

  private getActiveUserId() {
    // sessionStorage.getItem('activeUser');
    let user: User = JSON.parse(sessionStorage.getItem('activeUser'));
    console.log(user.personeelID)
    return user.personeelID;
  }

  public setHour(hour:HourRegister) {
    this.id  = this.getActiveUserId()
    this.api.setHour(hour,this.id);
  }

  

}

