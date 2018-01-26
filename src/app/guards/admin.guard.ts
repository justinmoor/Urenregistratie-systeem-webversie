import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth : AuthorizationService, private router:Router){

  }

  canActivate(){
    console.log("adminGuard");
    if(this.auth.getActiveUser() != null && this.auth.getActiveUser().rechten == "1" ){
      return true;
    } else {
      alert("Niet bevoegd!")
      this.router.navigate(['/registratie']);
      return false;
    }
  }
}
