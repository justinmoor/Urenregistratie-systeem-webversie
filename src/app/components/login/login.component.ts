import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  user: User = new User();
  fout : boolean = false;

  show() {

  }

  constructor(private userService: UserService, private apiService: ApiService) {
   }

  logIn() {
    this.fout = this.userService.login(this.user, true);
  }
}
