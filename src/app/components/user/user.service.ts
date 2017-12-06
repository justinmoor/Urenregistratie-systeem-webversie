import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
import { AuthorizationService } from '../services/authorization.service';

import { User } from './user';

@Injectable()
export class UserService{
    constructor(private api: ApiService,
    private authService: AuthorizationService,
    private router:Router
    )
{

}
public getAll(): Observable<User[]>{
    return this.api.get<User[]>('users');
}

public login(user:User, remember:boolean):void{
    this.authService.setAuthorization(user.email, user.wachtwoord);

    this.api.get<User>('user/me').subscribe(
        authenticator => {
            this.authService.storeAuthorization(authenticator, remember);

            this.goHome();
        },
        error => {
            alert('Inloggen is mislukt!');
        }
    )
}

private goHome() {
    this.router.navigate(['Registratie']);
}

}