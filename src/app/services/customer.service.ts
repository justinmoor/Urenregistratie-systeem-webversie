import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ApiService } from './api.service';

import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
    constructor(
        private api: ApiService,
        private router: Router
    ) {

    }
    public getAll(): Observable<Customer[]> {
        return this.api.getUsers<Customer[]>();
    }

    public voegKlantToe(customer: Customer) {
        this.api.voegKlantToe(customer);
    }


}
