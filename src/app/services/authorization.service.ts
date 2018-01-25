import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user'

@Injectable()
export class AuthorizationService
{
    private login: string = null;
    private wachtwoord: string = null;
    private authenticator: Object = null;
    private activeUser : User;

    public authorized$ = new Subject<boolean>();

    constructor() {
    }

    public hasAuthorization(): boolean
    {
        return this.login !== null && this.wachtwoord !== null;
    }

    public createAuthorizationString(): string
    {
        return 'Basic ' + btoa(this.login + ':' + this.wachtwoord);
    }

    public setAuthorization(login:string, wachtwoord:string):void{
        this.login = login;
        this.wachtwoord = wachtwoord;
    }

    public storeAuthorization(authenticator: Object, local: boolean)
    {
        this.authenticator = authenticator;

        let authorization =
        {
            login: this.login,
            password: this.wachtwoord,
            authenticator: this.authenticator
        };

        let authorizationString = JSON.stringify(authorization);
        let storage = local ? localStorage : sessionStorage;

        storage.setItem('authorization', authorizationString);

        this.authorized$.next(true);
    }

    public deleteAuthorization(): void
    {
        this.login = null;
        this.wachtwoord = null;
        this.authenticator = null;

        sessionStorage.removeItem('activeUser');
        sessionStorage.removeItem('authorization');
        localStorage.removeItem('authorization');

        this.authorized$.next(false);
    }

    public getAuthenticator(): Object
    {
        return this.authenticator;
    }

    public setAuthenticator(authenticator: Object): void
    {
        this.authenticator = authenticator;
    }

    public getActiveUser(){
        //Actieve user krijgen
        this.activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
        return this.activeUser
    }

}
