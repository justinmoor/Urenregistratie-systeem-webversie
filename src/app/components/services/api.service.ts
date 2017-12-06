import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthorizationService } from './authorization.service';

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
        
        return `/api/${path}${queryString}`;
    }

    public get<T>(path:string, queryParameters?:Object):Observable<T>{
        let uri = this.createURI(path, queryParameters);
        let headers = this.createRequestHeaders();

        return this.http.get<T>(uri, {headers:headers});
    }


}