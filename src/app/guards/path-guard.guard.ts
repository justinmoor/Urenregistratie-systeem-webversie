import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';

@Injectable()
export class PathGuardGuard implements CanActivate {

  constructor(private auth : AuthorizationService, private router:Router){

  }

  canActivate(){
    console.log("guard");
    if(this.auth.getActiveUser() != null){
      return true;
    } else {
      alert("Log in!")
      this.router.navigate(['/']);
      return false;
    }
  }
}
