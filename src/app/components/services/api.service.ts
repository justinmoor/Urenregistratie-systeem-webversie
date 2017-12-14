import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthorizationService } from './authorization.service';
import { error } from 'selenium-webdriver';

import { User } from '../user/user'
import { URLSearchParams } from '@angular/http';

@Injectable()
export class ApiService{

    constructor(private http: HttpClient, private authService: AuthorizationService){

    }

    private createQueryString(queryParameters: Object): string
    {
        let queryString = '';
        
        if (typeof queryParameters === 'object')
        {
            for (let key in queryParameters)
            {
                let value = queryParameters[key];
                let prefix = queryString.length === 0 ? '?' : '&';
                
                queryString += `${prefix}${key}=${value}`;
            }
        }
        
        return queryString;
    }

    private createRequestHeaders(): HttpHeaders
    {
        let headers = new HttpHeaders();

        if (this.authService.hasAuthorization())
        {
            headers = headers.set('Authorization', this.authService.createAuthorizationString());
        }
        
        return headers;
    }

    private createURI(path: string, queryParameters: Object): string
    {
        let queryString = this.createQueryString(queryParameters);
        
        return `http://localhost:8080/${path}/${queryString}`;
    }

    public get<T>(path:string, queryParameters?:Object):Observable<T>{
  //      let uri = this.createURI(path, queryParameters);
        let headers = this.createRequestHeaders();

        return this.http.get<T>("http://localhost:8080/personeel/login", {headers:headers});
    }

    public getUrenVanUser(id:number){
        return this.http.get('http://localhost:8080/uren/getbyid?=' + id);
    }
    public getUsers<T>(queryParameters?: Object): Observable<T>{
        return this.http.get<T>('http://localhost:8080/personeel/getall')
    }

    public setWerkzaam( userModel: User){
        let user = {
            id : userModel.personeelID,
            werkzaam : userModel.werkzaam
        }
        let uri = this.createURI("personeel/werkzaam",user);
        return this.http.post(uri, null).subscribe();
    }
}