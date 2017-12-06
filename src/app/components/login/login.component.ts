import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  constructor(private userService:UserService) {
      console.log("Constructor ran...")
   }

  login() {
    this.userService.login(this.user, false)
    
  }
}
