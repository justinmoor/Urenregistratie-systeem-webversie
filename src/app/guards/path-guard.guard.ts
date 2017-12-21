import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PathGuardGuard implements CanActivate {
  canActivate(){
    console.log("guard");
    
    return true;
  }
}
