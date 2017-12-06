import { NgModule, Component } from '@angular/core';

import { AuthorizationService } from './authorization.service';
import { ApiService } from './api.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
  })
  
export class ServicesComponent { 
    constructor(){
        console.log("constructor ran-->")
    }
}
