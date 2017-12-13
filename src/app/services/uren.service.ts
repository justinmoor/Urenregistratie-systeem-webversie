import { Injectable } from '@angular/core';
import { Uren } from '../models/uren'
import { ApiService } from '../components/services/api.service';

@Injectable()
export class UrenService {

  constructor(private api:ApiService) { 

  }

  public getAll(){
    return this.api.getUrenVanUser(1);
  }

}
