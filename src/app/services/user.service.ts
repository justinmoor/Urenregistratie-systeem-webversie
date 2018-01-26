import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { AuthorizationService } from './authorization.service';

import { User } from '../models/user';
import { LoginComponent } from '../components/login/login.component';

@Injectable()
export class UserService {
    constructor(
    private api: ApiService,
    private authService: AuthorizationService,
    private router: Router
    ) {

}
public getAll(): Observable<User[]> {
    return this.api.getUsers<User[]>()
}

test : LoginComponent

public login(user: User, remember: boolean): boolean{
    this.authService.setAuthorization(user.email, user.wachtwoord);
    this.api.get<User>('personeel/login').subscribe(
        authenticator => {

            this.authService.storeAuthorization(authenticator, remember);
            sessionStorage.setItem('activeUser', JSON.stringify(authenticator));
            this.router.navigate(['/registratie']);
            return false;
        },
        error => {
          return true;
        }
    );
    return true;
}

public setWerkzaam(user: User) {
    this.api.setWerkzaam(user);
}

private goHome() {
    this.router.navigate(['/Registratie']);
}

public voegAccountToe(user: User) {
    this.api.voegAccountToe(user);
}

public changePassword(id:number, nieuwWachtwoord:string, oldPassword:string) {
    this.api.changePassword(id, nieuwWachtwoord, oldPassword);
}
public checkPasswordRequirements(newPassword: string, repeatPassword: string): boolean{
      if(newPassword != undefined && repeatPassword != undefined && newPassword === repeatPassword && newPassword.length > 7){
        console.log('*teleports behind u* \n *returns true* \n "Nothing personnel kiddo"')
        return true;
      }
      else{
        false
      }

}
public hasCorrectProperties(user: User): boolean{
      if (user.achternaam.length > 2 && user.voornaam.length > 2 && user.achternaam.length < 41 && user.voornaam.length < 41 && user.tussenvoegsel.length < 10){
          return true;
        } else{
          return false;
        }

}

}
