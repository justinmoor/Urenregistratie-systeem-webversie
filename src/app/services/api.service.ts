import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthorizationService } from './authorization.service';
import { error } from 'selenium-webdriver';

import { User } from '../models/user';
import { Customer } from '../models/customer';
import { URLSearchParams } from '@angular/http';
import { HourRegister } from '../models/hour-register';
import { Subject } from '../models/subject';

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
      let uri = this.createURI("uren/getbyid?id=") // werkt niet?
      return this.http.get<T>("http://localhost:8080/api/uren/getall");
    }
    public getUrenVanUser<T>(id) : Observable<T> {
      let uri = this.createURI("uren/getbyid?id=") // werkt niet?
      return this.http.get<T>("http://localhost:8080/api/uren/getbyid?id=" + id);
     }

    public getUsers<T>(queryParameters?: Object): Observable<T>{
        let uri = this.createURI("personeel/getall")
        let headers = this.createRequestHeaders();
        return this.http.get<T>(uri, {headers:headers});
    }

    public setWerkzaam( userModel: User){
        let user = {
            id : userModel.personeelID,
            werkzaam : userModel.werkzaam
        }
        let uri = this.createURI("personeel/werkzaam",user);
        return this.http.post(uri, null).subscribe();
    }

    public setConfirmed(uur){
        let uri = this.createURI("uren/confirm")
        return this.http.post(uri, uur ).subscribe();
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
        console.log("l",oldPassword,"l")
        let uri = this.createURI('personeel/wachtwoord', data);
        return this.http.post(uri, data).subscribe();
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
        return this.http.post(uri, data).subscribe();
    }

    public getKlantenByName<T>(klantenaam:string) {
        return this.http.get<T>("http://localhost:8080/api/uren/")
    }

    public getCustomers<T>(): Observable<T> {
        return this.http.get<T>("http://localhost:8080/api/klanten/all");
    }

    public getProjects<T>(customerName:String): Observable<T> {
        return this.http.get<T>("http://localhost:8080/api/projects/allByName?name="+ customerName);
      }

    public getSubjects<T>(projectName: String, customerName:String): Observable<T> {
        return this.http.get<T>("http://localhost:8080/api/subjects/allByName?project="+projectName+"&klant="+customerName);
      }


    private data(customerName, projectName, subjectName) {
        let data = {
            klantnaam : customerName,
            projectnaam : projectName,
            onderwerpnaam : subjectName
        }
        return data;
    }
    public addCustomer(customerName: string, projectName: string, subjectName: string) {
        console.log("api.service addCustomer", customerName, projectName, subjectName)
        let data = this.data(customerName, projectName, subjectName);
        let uri = this.createURI('klanten/add', null);
        let headers = this.createRequestHeaders();

        this.http.post(uri, data, {headers: headers}).subscribe(() => console.log('success biatch!'),
        error => console.log(error));
      }

      public addProject(customerName: string, projectName: string, subjectName: string) {
        console.log("api.service addProject", customerName, projectName, subjectName)
        let data = this.data(customerName, projectName, subjectName);
        let uri = this.createURI('projects/add', null);
        let headers = this.createRequestHeaders();

        this.http.post(uri, data, {headers: headers}).subscribe(() => console.log('success biatch!'),
        error => console.log(error));
      }

      public addSubject(customerName:string, projectName:string, subjectName:string) {
        console.log("api.service addSubject", customerName, projectName, subjectName)
          let data = this.data(customerName, projectName, subjectName);
          let uri = this.createURI('subjects/add', null);
          let headers = this.createRequestHeaders();

          this.http.post(uri, data, {headers: headers}).subscribe(() => console.log('success biatch!'),
          error => console.log(error));
      }
    public updateHour(hour:HourRegister, employeeID){
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
        console.log(data)
        let uri = this.createURI('uren/updateHour', null)
        return this.http.post(uri, data).subscribe();
    }
}
