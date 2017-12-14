import { Injectable } from '@angular/core';
import { Uren } from '../models/uren'
import { ApiService } from '../components/services/api.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../components/user/user';

@Injectable()
export class UrenService {
  id: number;
  constructor(private api: ApiService) {

  }

  public getAll(): Observable<Uren[]> {
    return this.api.getUrenVanUser<Uren[]>(this.getActiveUserId());
  }

  private getActiveUserId() {
    sessionStorage.getItem('activeUser');
    let user: User = JSON.parse(sessionStorage.getItem('activeUser'));
    console.log(user.personeelID)
    return user.personeelID;
  }

}

