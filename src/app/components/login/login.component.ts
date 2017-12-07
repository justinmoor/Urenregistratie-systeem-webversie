import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { ApiService } from '../services/api.service';
import { URLSearchParams } from "@angular/http"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();
  email = "";
  wachtwoord = "";

  persoon = {
    email: "",
    wachtwoord: ""
  }

  constructor(private userService:UserService, private apiService:ApiService) {
      console.log("Constructor ran...")
   }

  logIn() {

    this.userService.login(this.user, false)
    
  }
}
