import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from './authorization.service';
import { User } from '../models/user';
import { Customer } from '../models/customer';
import { HourRegister } from '../models/hour-register';
import { Hours } from '../models/hours';

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

    private createURI(path: string, queryParameters?: Object): string
    {
        let queryString = this.createQueryString(queryParameters);

        return `http://localhost:8080/api/${path}/${queryString}`;
    }

    public get<T>(path:string, queryParameters?:Object):Observable<T>{
        let uri = this.createURI("auth/login");
        let headers = this.createRequestHeaders();

        return this.http.get<T>(uri, {headers:headers});
    }

    public getUrenVanAlleUsers<T>(): Observable<T> {
      let headers = this.createRequestHeaders();
      let uri = this.createURI("uren/getall") // werkt niet?
      return this.http.get<T>("http://localhost:8080/api/uren/getall", {headers : headers});
    }
    public getUrenVanUser<T>(id) : Observable<T> {
      let uri = this.createURI("uren/getbyid?id=") // werkt niet?
      let headers = this.createRequestHeaders();
      return this.http.get<T>("http://localhost:8080/api/uren/getbyid?id=" + id, {headers : headers});
     }

    public getUsers<T>(queryParameters?: Object): Observable<T>{
        let uri = this.createURI("personeel/getall")
        let headers = this.createRequestHeaders();
        console.log(headers)
        return this.http.get<T>(uri, {headers:headers});
    }

    public setWerkzaam( userModel: User){

        let data = {
            id : userModel.personeelID,
            werkzaam : userModel.werkzaam
        }
        let headers = this.createRequestHeaders();
        let uri = this.createURI("personeel/werkzaam",data);
        return this.http.post(uri, null,{headers:headers}).subscribe();
    }

    public setConfirmed(uur){
        let uri = this.createURI("uren/confirm")
        let headers = this.createRequestHeaders();
        return this.http.post(uri, uur, {headers:headers} ).subscribe();
    }

    public voegAccountToe(user: User){
        let data = {
            achternaam : user.achternaam,
            tussenvoegsel: user.tussenvoegsel,
            voornaam: user.voornaam,
            email: user.email,
            wachtwoord: user.wachtwoord,
            rechten: user.rechten,
            werkzaam: user.werkzaam
        }
        let uri = this.createURI('personeel/add', null);
        let headers = this.createRequestHeaders();
        return this.http.post(uri, data, {headers: headers}).subscribe();
    }

    public voegKlantToe(customer: Customer) {
        let data = {
            customerName: customer.customerName,
        }
        let uri = this.createURI('customer/add', null);
        let headers = this.createRequestHeaders();
        return this.http.post(uri, data, { headers: headers }).subscribe();
    }

    public changePassword(id:number, newPassword:String, oldPassword:string) {
        let data = {
            id : id,
            wachtwoord:newPassword,
            oldPassword:oldPassword
        };

        let uri = this.createURI('personeel/wachtwoord', data);
        let headers = this.createRequestHeaders();
        return this.http.post(uri, data, {headers : headers}).subscribe();
    }

    public setHour(hour:HourRegister, employeeID) {
        let data ={
            startingDate : hour.startingDate,
            startingTime : hour.startingTime,
            endingDate : hour.endingDate,
            endingTime : hour.endingTime,
            customerName : hour.customerName,
            projectName : hour.projectName,
            subjectName : hour.subjectName,
            comment : hour.comment,
            employeeId : employeeID
        }
        let uri = this.createURI('uren/setHour', null)
        let headers = this.createRequestHeaders();
        return this.http.post(uri, data,{headers:headers}).subscribe();
    }

    public getKlantenByName<T>(klantenaam:string) {
        let headers = this.createRequestHeaders();
        return this.http.get<T>("http://localhost:8080/api/uren/", {headers:headers})
    }

    public getCustomers<T>(): Observable<T> {
        let headers = this.createRequestHeaders();
        return this.http.get<T>("http://localhost:8080/api/klanten/all", {headers:headers});
    }

    public getProjects<T>(customerName:String): Observable<T> {
        let headers = this.createRequestHeaders();
        return this.http.get<T>("http://localhost:8080/api/projects/allByName?name="+ customerName, {headers:headers});
      }

    public getSubjects<T>(projectName: String, customerName:String): Observable<T> {
        let headers = this.createRequestHeaders();
        return this.http.get<T>("http://localhost:8080/api/subjects/allByName?project="+projectName+"&klant="+customerName, {headers:headers});
      }


    private data(customerName, projectName, subjectName) {
        let data = {
            customerName : customerName,
            projectName : projectName,
            subjectName : subjectName
        }
        return data;
    }
    public addCustomer(customerName: string, projectName: string, subjectName: string) {
        let data = this.data(customerName, projectName, subjectName);
        let uri = this.createURI('klanten/add', null);
        let headers = this.createRequestHeaders();

        this.http.post(uri, data, {headers: headers}).subscribe(() => console.log('success biatch!'),
        error => console.log(error));
      }

      public addProject(customerName: string, projectName: string, subjectName: string) {
        let data = this.data(customerName, projectName, subjectName);
        let uri = this.createURI('projects/add', null);
        let headers = this.createRequestHeaders();

        this.http.post(uri, data, {headers: headers}).subscribe(() => console.log('success biatch!'),
        error => console.log(error));
      }

      public addSubject(customerName:string, projectName:string, subjectName:string) {
          let data = this.data(customerName, projectName, subjectName);
          let uri = this.createURI('subjects/add', null);
          let headers = this.createRequestHeaders();

          this.http.post(uri, data, {headers: headers}).subscribe(() => console.log('success biatch!'),
          error => console.log(error));
      }

    public updateHour(hour:Hours){
        let uri = this.createURI('uren/updateHour', null)
        let headers = this.createRequestHeaders();
        return this.http.post(uri, hour, {headers : headers}).subscribe();
    }
}
