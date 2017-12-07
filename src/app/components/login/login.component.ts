import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { ApiService } from '../services/api.service';
import { HttpParams } from '@angular/common/http/src/params';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();
  email:String = '';
  wachtwoord:string = '';

  constructor(private userService:UserService, private apiService:ApiService) {
      console.log("Constructor ran...")
      
   }

  login() {
    this.userService.login(this.user, false)
    
    this.apiService.post("personeel/login", null, {
      params : new HttpParams().set('email', 'this.email')
    });
    
  }


}
